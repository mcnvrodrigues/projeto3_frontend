import React, { Component } from "react";
import './Nav.css';
//import Login from '../auth/Login';
import { Link } from "react-router-dom";

class Nav extends Component{
  render(){
    return(
      <React.Fragment>
        <nav className='navbar is-fixed-top is-light'>
          <div className='brand-name container'>
            <Link to='/'><label className='has-text-success title is-1'>Commoney</label></Link>
          </div>
          <div className='button-login navbar-end navbar-item'>
            <Link to='/Login'><button className="button is-danger" type='button'>Login</button></Link>
          </div>
        </nav> 
      </React.Fragment>
    );
  }
}

export default Nav