import React from 'react';
import ReactDOM from 'react-dom';
//import AppViews from './views/AppViews.js';
//import DeployerViews from './views/DeployerViews.js';
//import AttacherViews from './views/AttacherViews.js';
//import {renderDOM, renderView} from './views/render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
//import * as backend from './build/index.mjs';
//import * as reach from '@reach-sh/stdlib/ALGO';
//import * as reach from '@reach-sh/stdlib/ETH';


const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultSession: 'Reach is Fun', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {view: 'ConnectAccount', ...defaults, home: true};
  }
  async componentDidMount() {
    this.setState({view:'DeployerOrAttacher'});
    /*
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      
      this.setState({view: 'DeployerOrAttacher'});
    }
    */
  }

  async connectToAccount () {
    let isConnected = false;
    try{

      await reach.setProviderByName('TestNet');
      await reach.setSignStrategy('AlgoSigner');
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      isConnected = true;
      
    }catch(error){
      isConnected = false;
      
    }
    return isConnected;

  }
  
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher', home: true}); }
  //selectJoin() { this.setState({home:false, poster: true, commenter: false, view: 'Wrapper', ContentView: Commenter}); }
  selectJoin() { this.setState({home:false, poster: false, commenter: true, view: 'Wrapper', ContentView: Commenter});}
  async selectCreate() {
    let isConnected = await this.connectToAccount(); 
    
    if(isConnected) this.setState({home:false, commenter: false, poster:true, view: 'Wrapper', ContentView: Poster}); 
    else {
      this.setState({home:false, view: 'NoAlgosigner'});
    }
  }
  aboutUs() {this.setState({home:false, view:'AboutUs'})}
  
  render() { return renderView(this, AppViews); }
}

class User extends React.Component {
  async terminate(){
    this.setState({createdFirstPost: false, sawFirstPost:false, view: 'terminate'});
  }
  
}


class Poster extends User {
  constructor(props) {
    super(props);

    const address = props.acc.getAddress();
    this.state = {view: 'startPost',posts: [], seePost:false, commenterPosts: [], sawFirstPost: false, address:address, createdFirstPost: false}; 
  }
  
  async setdisplayName(displayName){
    this.setState({view: 'Deploy', displayName});
  }
  async startPost() { 
    return this.state.displayName; 
  }

  selectJoin() {
    
    this.setState({home:false, poster: false, joinSession: true, commenter: true, view: 'Wrapper', ContentView: Commenter});
    
  }
  
  selectView() {
    
    if(!this.state.sawFirstPost) this.setState({home:false, poster: false, commenter: true, view: 'Wrapper', ContentView: commenter});
    else {this.setState({home:false, poster: false, joinSession:false, commenter: true, seePost:false, view: 'Wrapper', ContentView: commenter})}
  }
  selectCreate() { 
    if(this.state.createdFirstPost) this.setState({view: 'PostThought'}); 
    else this.setState({view: 'startPost'});
  }
  async post(){
    const thought = await new Promise(resolvePostedP => {
      
      this.setState({view: 'PostThought', posts: this.state.posts, resolvePostedP});
    });
    this.setState({view: 'SeePost', createdFirstPost:true, posts: [...this.state.posts, thought], thought});
    
    return thought;
  }

  async resume(){
    const decision = await new Promise(resolveContinueP => {
      this.setState({view: 'ContinueOrStop',  resolveContinueP});
    });
    return decision;
  }

  async postThought(thought) { this.state.resolvePostedP(thought); }

  async continue(decision) { 
    if(decision === 'Continue') decision = 0;
    else if(decision === 'Stop') decision = 1;
    this.state.resolveContinueP(decision);
  }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    
    backend.Ada(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    
  }

  async help() {
    this.setState({view:'Help'})
  }

  
  render() { return renderView(this, DeployerViews); }
}

class Commenter extends User {
  constructor(props) {
    super(props);
    
    if(props.sawFirstPost && !props.joinSession) {this.state = {view: 'ViewPost', alreadyViewed: true, posts: props.commenterPosts}}
    else {this.state = {view: 'Attach', posts: []}};
  }
  joinNewSession() {
    this.props.parent.setState({joinSession:false});
    this.setState({view:'Attach'})
  }
  
  viewPosts() {
    this.props.parent.setState({seePost:true});
    this.setState({view:'ViewPost'})
  }
  
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Chioma(ctc, this);
  }
  
  async viewSession(displayName){
    await new Promise(resolveAcceptedP => {
      this.setState({view: 'viewDisplayName', displayName, resolveAcceptedP});
    });
    return true;
  }
  
  async viewContent(post, displayName, address){
    let newPost = {
      thought: post,
      Session: displayName,
      address: address
    }
    this.props.parent.setState({commenterPosts: [...this.props.parent.state.commenterPosts, newPost],seePost:true, sawFirstPost: true});
    
    await this.setState({view: 'ViewPost', alreadyViewed:false, posts: [...this.state.posts, newPost]});
  }

  comment(yesOrNo) {
    
    if(yesOrNo === 'Yes'){
      this.state.resolveAcceptedP();
      this.setState({view: 'WaitingForTurn', joining:true});
    }
    else{
      this.setState({view: 'Attach'});
    }
  }

  
  render() { return renderView(this, AttacherViews); }
}

renderDOM( App );