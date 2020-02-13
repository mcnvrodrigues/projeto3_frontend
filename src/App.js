// App.js

import React, { Component } from 'react';
import Home from './components/home/Home';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//import Signup from './components/auth/Signup';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  } 

  render() {
    return (
      <div className="App">
       {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/> */}
          {/* <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:id" component={ProjectDetails} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;