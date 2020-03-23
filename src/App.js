// App.js

import React, { Component } from 'react';
import Home from './components/home/Home';
import Nav from './components/home/Nav';

import Footer from './components/home/Footer';

//import Investiments from './components/loggedinArea/Investiments';
//import CreateInvestiments from './components/loggedinArea/CreateInvestiments';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import AppContext from './context/AppContext';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/protected-route';
import Confirmation from './components/auth/Confirmation';
import EmailPage from './components/EmailPage';
import AuthService from './components/auth/auth-service';
import Service from './components/service';
import Education from './components/questions/Education';
import Dependents from './components/questions/Dependents';
import Profile from './components/loggedinArea/Profile';
import ProfileForm from './components/ProfileForm';
import Messages from './components/Messages';
// import AvailableLoan from './components/AvailableLoan';

import Dashboard from './components/Dashboard'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
      confirmationCode: '',
      messages: {msg: []}
    };
    this.service = new AuthService();
    this.generalService = new Service();
  }

  fetchUser(){
    console.log('fetchUser');
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj,
    })

    console.log('massages passed to app >>', this.state.messages)
    // this.props.history.push('/dashboard')
  } 

  getConfirmationCode = (code) => {
    this.setState({
      confirmationCode: code
    })
  }

  // componentDidUpdate(){
  //   if(this.state.loggedInUser){
  //     this.generalService.messagesreq(this.state.loggedInUser._id)
  //     .then(message => {        

  //       console.log('Message: ', message);
        
  //       this.setState({
          
  //         messages: message.msg
  //       })
  //     })
  //   }else{
  //     console.log('Usuario não logado')
  //   }
    
  // }

  render() {

    const contextValues = {
      state: this.state,
      getUser: this.getTheUser,
      getConfirmationCode: this.getConfirmationCode
    }

    {this.fetchUser()}
    
    // if(this.state.loggedInUser){
    // return (
    //   <AppContext.Provider value = {contextValues}>
    //   <div className="App">
    //   {/* <Navbar userInSession={this.state.loggedInUser} /> */}
    //     <Switch>
    //       <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
    //       <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
    //       <Route exact path='/auth/:confirmation' component={Confirmation}/>
    //       {/* <Route exact path="/projects" component={ProjectList}/>
    //       <Route exact path="/projects/:id" component={ProjectDetails} /> */}
    //     </Switch>
    //   </div>
    //   </AppContext.Provider>
    // );
    // } else{
    //   return(
    //     <AppContext.Provider value = {contextValues}>
    //       <div className="App">
    //       {/* <Navbar userInSession={this.state.loggedInUser} /> */}
    //         <Switch>
    //           <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
    //           <Route exact path='/auth/:confirmation' component={Confirmation}/>
    //           {/* <Route exact path="/projects" component={ProjectList}/>
    //           <Route exact path="/projects/:id" component={ProjectDetails} /> */}
    //         </Switch>
    //       </div>
    //     </AppContext.Provider>
    //   )
    // }

    return (
      <AppContext.Provider value = {contextValues}>
           {/* <div className="App">
             <Nav/> */}
           {/* <Navbar userInSession={this.state.loggedInUser} /> */}

           {/* {(this.state.loggedInUser ? 
           <div className="App">
           <Nav userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
           <Switch>
                            
               <Route exact path='/confirmation' component={EmailPage}/>
               <Route exact path='/education' component={Education}/>
               <Route exact path='/dependents' component={Dependents}/>               
               <Route path='/dashboard' component={Dashboard}/>
              
               
               <Route exact path='/:confirmation' component={Confirmation}/>
             
             </Switch>

            </div>
           :
           <div className="App">
           <Nav userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
           <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/signup' component={Signup}/>
               <Route exact path='/login' component={Login}/>               
               <Route exact path='/confirmation' component={EmailPage}/>
               <Route exact path='/education' component={Education}/>
               <Route exact path='/dependents' component={Dependents}/>
               <Route exact path='/profile' component={Profile}/>
               
               
               <Route exact path='/dashboard' component={Dashboard}/>
              
               
               <Route exact path='/:confirmation' component={Confirmation}/>
             
             </Switch>
             </div>
           )} */}
             
           {/* </div> */}

        <div className="App">
            <Nav userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
                
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>               
              <Route exact path='/confirmation' component={EmailPage}/>
              <Route exact path='/education' component={Education}/>
              <Route exact path='/dependents' component={Dependents}/>
              <Route exact path='/profileform' component={ProfileForm}/>
              <ProtectedRoute exact path='/profile' user={this.state.loggedInUser} component={() => <Profile />}/>    
              <ProtectedRoute path='/dashboard' user={this.state.loggedInUser} component={Dashboard} /> 
              <ProtectedRoute exact path='/messages' user={this.state.loggedInUser} component={Messages}/>    
              <Route exact path='/:confirmation' component={Confirmation}/>    

            </Switch>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;
