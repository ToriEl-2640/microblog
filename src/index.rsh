'reach 0.1'

const [ isStatus, START, STOP] = makeEnum(2);

const common = {
    terminate: Fun([], Null)
};

const Poster = {
    ...common,
post: Fun([], Bytes(250)),
startPost: Fun([], Bytes(15)),
resume: Fun([], UInt),
displayName: Bytes(15)
};

const Commenter = {
    ...common,
    comment: Fun([], Bool),
    viewContent: Fun([Bytes(250), Bytes(15), Address], Null),
    viewSession: Fun([Bytes(15)], Bool)
};

export const main = Reach.App(
    {},
    [Participant('Ada', Poster), ParticipantClass('Chioma', Commenter)],
    (A, B) => {
        A.only(() => {
            const displayName = declassify(interact.startPost());
            const creator = this;
        });

        A.publish(displayName, creator);
        commit();

        B.only(() => {
            const comment = declassify(interact.viewSession(displayName));
        });
        B.publish(comment);

        var status = START;

        invariant(balance() == 0);
        while(status == START){

            commit();

            A.only(() => {
                const message = declassify(interact.post());
            });

            A.publish(message);
            commit();

            B.only(() => {
                interact.viewContent(message, displayName, creator) });

                A.only(() => {
                    const stopNow = declassify(interact.resume());
                })

                A.publish(stopNow);
                status = stopNow;
                continue;
        };
        commit();

        each([A, B], () => {interact.terminate()});

        exit();
    }
);
 