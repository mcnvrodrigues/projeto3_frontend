import React, { Component } from "react";
//import Login from '../auth/Login';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import AuthService from '../auth/auth-service';

class Nav extends Component{
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({...this.state, loggedInUser: nextProps[this.context.state.loggedInUser]})
  // }

  componentDidUpdate() {
    console.log('usuario logado >> ', this.context.state.loggedInUser);
  }
  render(){
    
    return(
      <AppContext.Consumer>
        { context => (
        <React.Fragment>
          <nav className='navbar is-white'>
            <div className='brand-name container'>
              <Link to='/'><img src='images/logo.png' alt='logo'></img></Link>
            </div>
            {(this.context.state.loggedInUser ?
            <div>
            <figure className="image is-48x48 dropdown">
              <img className="is-rounded dropbtn" src="images/user.png" alt='user-logo'/> 
              <div className = "dropdown-content">
            <span>{this.context.state.loggedInUser.nome}</span>
              </div>             
            </figure>
            </div>
            :            
            <div className='button-login navbar-end navbar-item'>
              <Link to='/Login'><button className="button is-danger" type='button'>Login</button></Link>
            </div>
            
            )}
          </nav> 
        
        </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

Nav.contextType = AppContext;
export default Nav;