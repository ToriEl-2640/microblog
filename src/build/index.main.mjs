// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0],
      5: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Ada(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Ada expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Ada expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '250'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Null;
  
  
  const v94 = ctc.selfAddress();
  const v96 = stdlib.protect(ctc0, await interact.startPost(), {
    at: './index.rsh:29:62:application',
    fs: ['at ./index.rsh:28:15:application call to [unknown function] (defined at: ./index.rsh:28:19:function exp)'],
    msg: 'startPost',
    who: 'Ada'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v96, v94],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v110 = v107;
  
  while (await (async () => {
    const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v120;})()) {
    const v123 = stdlib.protect(ctc3, await interact.post(), {
      at: './index.rsh:49:57:application',
      fs: ['at ./index.rsh:48:19:application call to [unknown function] (defined at: ./index.rsh:48:23:function exp)'],
      msg: 'post',
      who: 'Ada'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v97, v123],
      evt_cnt: 1,
      funcNum: 3,
      lct: v110,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:52:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
        
        ;
        const v128 = stdlib.addressEq(v97, v124);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
    ;
    const v128 = stdlib.addressEq(v97, v124);
    stdlib.assert(v128, {
      at: './index.rsh:52:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ada'
      });
    const v133 = stdlib.protect(ctc4, await interact.resume(), {
      at: './index.rsh:59:63:application',
      fs: ['at ./index.rsh:58:23:application call to [unknown function] (defined at: ./index.rsh:58:27:function exp)'],
      msg: 'resume',
      who: 'Ada'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v97, v133],
      evt_cnt: 1,
      funcNum: 4,
      lct: v126,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:62:19:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
        
        ;
        const v138 = stdlib.addressEq(v97, v134);
        ;
        const cv109 = v135;
        const cv110 = v136;
        
        await (async () => {
          const v109 = cv109;
          const v110 = cv110;
          
          if (await (async () => {
            const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            
            return v120;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
    ;
    const v138 = stdlib.addressEq(v97, v134);
    stdlib.assert(v138, {
      at: './index.rsh:62:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Ada'
      });
    const cv109 = v135;
    const cv110 = v136;
    
    v109 = cv109;
    v110 = cv110;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc5, await interact.terminate(), {
    at: './index.rsh:68:47:application',
    fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
    msg: 'terminate',
    who: 'Ada'
    });
  
  return;
  
  
  
  
  };
export async function Chioma(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Chioma expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Chioma expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '250'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
  ;
  const v104 = stdlib.protect(ctc2, await interact.viewSession(v98), {
    at: './index.rsh:37:60:application',
    fs: ['at ./index.rsh:36:15:application call to [unknown function] (defined at: ./index.rsh:36:19:function exp)'],
    msg: 'viewSession',
    who: 'Chioma'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v97, v104],
    evt_cnt: 1,
    funcNum: 1,
    lct: v100,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
      
      ;
      const v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v110 = v107;
      
      if (await (async () => {
        const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v120;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v110 = v107;
  
  while (await (async () => {
    const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v120;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
    ;
    const v128 = stdlib.addressEq(v97, v124);
    stdlib.assert(v128, {
      at: './index.rsh:52:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Chioma'
      });
    stdlib.protect(ctc4, await interact.viewContent(v125, v98, v99), {
      at: './index.rsh:56:37:application',
      fs: ['at ./index.rsh:55:19:application call to [unknown function] (defined at: ./index.rsh:55:23:function exp)'],
      msg: 'viewContent',
      who: 'Chioma'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
    ;
    const v138 = stdlib.addressEq(v97, v134);
    stdlib.assert(v138, {
      at: './index.rsh:62:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Chioma'
      });
    const cv109 = v135;
    const cv110 = v136;
    
    v109 = cv109;
    v110 = cv110;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc4, await interact.terminate(), {
    at: './index.rsh:68:47:application',
    fs: ['at ./index.rsh:68:13:application call to [unknown function] (defined at: ./index.rsh:68:25:function exp)'],
    msg: 'terminate',
    who: 'Chioma'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEEBSYCAQAAIjUAMRhBAaMpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEAAgUkkDEAAOiQSRCU0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gAT5i694NP4WULA0/zEAEkQ0/zT+MgZCAMFIJDQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQU1/oAEpqRFojT+ULA0/zEAEkQ0/yhLAVcAIGdIJTUBMgY1AkIAv0kjDEAAMyMSRCM0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gAQPv8Y0NP8WUQcIULA0AyIyBkIAR0giNAESRDQESSISTDQCEhFESTUFSVcADzX/Vw8gNf6ABIePxcQ0/1A0/lCwgaCNBogAkDEAKEsBVwAgZ0gjNQEyBjUCQgA/Nf81/jX9NP4iEkEAFDT9KEsBVwAgZ0gkNQEyBjUCQgAeQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes15",
                    "name": "elem0",
                    "type": "bytes15"
                  }
                ],
                "internalType": "struct T1",
                "name": "v98",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v99",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes15",
                    "name": "elem0",
                    "type": "bytes15"
                  }
                ],
                "internalType": "struct T1",
                "name": "v98",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v99",
                "type": "address"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v106",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes26",
                    "name": "elem7",
                    "type": "bytes26"
                  }
                ],
                "internalType": "struct T8",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v106",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes26",
                    "name": "elem7",
                    "type": "bytes26"
                  }
                ],
                "internalType": "struct T8",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cf238038062000cf2833981016040819052620000269162000228565b6000805543600355604080513381528251602080830191909152808401518051516001600160881b0319168385015201516001600160a01b0316606082015290517f14f2dd18a4d596e14958f06d8dfb850542ed20e3fe2872330b6091de9ce803689181900360800190a16200009f34156007620000f0565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e79291906200011a565b50505062000318565b81620001165760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200012890620002db565b90600052602060002090601f0160209004810192826200014c576000855562000197565b82601f106200016757805160ff191683800117855562000197565b8280016001018555821562000197579182015b82811115620001975782518255916020019190600101906200017a565b50620001a5929150620001a9565b5090565b5b80821115620001a55760008155600101620001aa565b604080519081016001600160401b0381118282101715620001f157634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620001f157634e487b7160e01b600052604160045260246000fd5b600081830360608112156200023c57600080fd5b62000246620001c0565b83518152601f198201915060408212156200026057600080fd5b6200026a620001c0565b60208312156200027957600080fd5b62000283620001f7565b60208601519093506001600160881b031981168114620002a257600080fd5b83529182526040840151916001600160a01b0383168314620002c357600080fd5b82602082015280602083015250809250505092915050565b600181811c90821680620002f057607f821691505b602082108114156200031257634e487b7160e01b600052602260045260246000fd5b50919050565b6109ca80620003286000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780639a3e391214610098578063a209ad4e146100ab578063ab53f2c6146100be578063d6ed1a1e146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a636600461079a565b6100f4565b61005d6100b936600461079a565b61023f565b3480156100ca57600080fd5b506100d36103ad565b60405161007a9291906107bd565b61005d6100ef36600461081a565b61044a565b61010460016000541460096105d3565b61011e8135158061011757506001548235145b600a6105d3565b6000808055600280546101309061082d565b80601f016020809104026020016040519081016040528092919081815260200182805461015c9061082d565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610862565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516101f49291906108c8565b60405180910390a1610208341560086105d3565b610210610677565b815181516001600160a01b0390911690526020808201805160009052514391015261023a816105fc565b505050565b61024f60056000541460116105d3565b6102698135158061026257506001548235145b60126105d3565b60008080556002805461027b9061082d565b80601f01602080910402602001604051908101604052809291908181526020018280546102a79061082d565b80156102f45780601f106102c9576101008083540402835291602001916102f4565b820191906000526020600020905b8154815290600101906020018083116102d757829003601f168201915b505050505080602001905181019061030c9190610862565b6040805133815284356020808301919091528501358183015290519192507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0919081900360600190a16103613415600f6105d3565b8051610379906001600160a01b0316331460106105d3565b610381610677565b815181516001600160a01b03909116905260208082018051828601359052514391015261023a816105fc565b6000606060005460028080546103c29061082d565b80601f01602080910402602001604051908101604052809291908181526020018280546103ee9061082d565b801561043b5780601f106104105761010080835404028352916020019161043b565b820191906000526020600020905b81548152906001019060200180831161041e57829003601f168201915b50505050509050915091509091565b61045a600460005414600d6105d3565b6104748135158061046d57506001548235145b600e6105d3565b6000808055600280546104869061082d565b80601f01602080910402602001604051908101604052809291908181526020018280546104b29061082d565b80156104ff5780601f106104d4576101008083540402835291602001916104ff565b820191906000526020600020905b8154815290600101906020018083116104e257829003601f168201915b50505050508060200190518101906105179190610862565b90507fa892e377ed422ad28c0312e08027313af8f9541f7498ba6c486e8f6f6aa737c2338360405161054a929190610905565b60405180910390a161055e3415600b6105d3565b8051610576906001600160a01b03163314600c6105d3565b60408051602081019091526000815281516001600160a01b031680825260056000554360015560408051602081019290925201604051602081830303815290604052600290805190602001906105cd9291906106b3565b50505050565b816105f85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515161065e576040805160208101909152600081528151516001600160a01b0316808252600460005543600155604080516020810192909252016040516020818303038152906040526002908051906020019061023a9291906106b3565b6000808055600181905561067490600290610737565b50565b60408051606081018252600091810191825290819081526020016106ae604051806040016040528060008152602001600081525090565b905290565b8280546106bf9061082d565b90600052602060002090601f0160209004810192826106e15760008555610727565b82601f106106fa57805160ff1916838001178555610727565b82800160010185558215610727579182015b8281111561072757825182559160200191906001019061070c565b5061073392915061076d565b5090565b5080546107439061082d565b6000825580601f10610753575050565b601f01602090049060005260206000209081019061067491905b5b80821115610733576000815560010161076e565b60006040828403121561079457600080fd5b50919050565b6000604082840312156107ac57600080fd5b6107b68383610782565b9392505050565b82815260006020604081840152835180604085015260005b818110156107f1578581018301518582016060015282016107d5565b81811115610803576000606083870101525b50601f01601f191692909201606001949350505050565b6000610120828403121561079457600080fd5b600181811c9082168061084157607f821691505b6020821081141561079457634e487b7160e01b600052602260045260246000fd5b60006020828403121561087457600080fd5b6040516020810181811067ffffffffffffffff821117156108a557634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146108bf57600080fd5b81529392505050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146108f657600080fd5b80604085015250509392505050565b60006101408201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013560a083015260a083013560c083015260c083013560e083015261010060e08401358184015280840135905065ffffffffffff19811680821461098457600080fd5b806101208501525050939250505056fea26469706673582212208171799f07ed848703647c885ac8b4148a7ac84e3507f206bfb2f23d233aaed264736f6c634300080c0033`,
  BytecodeLen: 3314,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:66:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:46:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:53:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Ada": Ada,
  "Chioma": Chioma
  };
export const _APIs = {
  };
