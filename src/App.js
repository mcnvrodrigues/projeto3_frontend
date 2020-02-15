// App.js

import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import AppContext from './context/AppContext';
import Signup from './components/auth/Signup';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Confirmation from './components/auth/Confirmation';

import AuthService from './components/auth/auth-service';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
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
      loggedInUser: userObj
    })
  } 

  render() {

    const contextValues = {
      state: this.state,
      getUser: this.getTheUser,
    }

    // this.fetchUser();
    
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
           <div className="App">
           {/* <Navbar userInSession={this.state.loggedInUser} /> */}
             <Switch>
               <Route exact path='/signup' component={Signup}/>
               <Route exact path='/auth/:confirmation' component={Confirmation}/>
               {/* <Route exact path="/projects" component={ProjectList}/>
               <Route exact path="/projects/:id" component={ProjectDetails} /> */}
             </Switch>
           </div>
      </AppContext.Provider>
    )
  }
}

export default App;