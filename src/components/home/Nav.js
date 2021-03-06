import React, { Component } from "react";
//import Login from '../auth/Login';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import AuthService from '../auth/auth-service';

class Nav extends Component{
  
  constructor(props){
    super(props);


    this.state = { 
      loggedInUser: null};
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

 

  componentDidUpdate() {
    console.log('usuario logado >> ', this.context.state.loggedInUser);
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      // this.context.getUser(null);  
      this.props.getUser(null);  
    })
  }
  render(){
    return(
      <AppContext.Consumer>
        { context => (
        <React.Fragment>
          <nav className='navbar' style={{"background-color":"#04549C"}}>
            <div className='brand-name'>
              <Link to='/'><img src='/images/logo-new.png' alt='logo' className='logo'></img></Link>
            </div>
            {/* {(this.context.state.loggedInUser ? */}
           
            {(this.state.loggedInUser ?
            <div>

            {/*  ------------------------------------------------------------ */}
            {/* <figure className="image is-48x48 dropdown">
                
                <span className="icon is-large">
                    <i className="fas fa-user-plus"></i>
                </span> */}
              {/* <img className="is-rounded dropbtn" src="images/user.png" alt='user-logo'/>  */}
              {/* <div className = "dropdown-content">

                  <div className='button-login navbar-end navbar-item'>
                    <Link to='/'><button className="button is-warning" type='button' onClick={() => this.logoutUser()}>Sair</button></Link>
                  </div>

              </div>             
            </figure> */}

            {/* ------------------------------------------------------------ */}

            {/* <div className="control has-icons-right dropdown">
              <div className='esp-right'>Olá, Marciano</div>
                <span className="icon is-large is-right">
                    <i className="fas fa-user-plus"></i>
                </span>              
              <div className = "dropdown-content">

                  <div className='button-login navbar-end navbar-item'>
                    <Link to='/'><button className="button is-warning" type='button' onClick={() => this.logoutUser()}>Sair</button></Link>
                  </div>

              </div>             
            </div> */}

            {/* ------------------------- DROPDOWN MENU ------------------------- */}
            <div className="dropdown is-active drop-space">
              <div className="dropdown-trigger">
                <button className="button  button-width" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Olá, {(this.state.loggedInUser.nome).substring(0, (this.state.loggedInUser.nome).indexOf(" "))}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                  
                  {(this.context.state.messages.msg.length !== 0?
                    <span className="icon is-small">
                      <i className="fas fa-bell" aria-hidden="true"></i>
                    </span>
                  :
                  <div></div>
                  )}
                  
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <Link to='/profile' href="#" className="dropdown-item">
                    Meus Dados
                  </Link>
                  <Link to='/dashboard' className="dropdown-item">
                    Área Exclusiva
                  </Link>
                  {/* <a href="#" className="dropdown-item is-active">
                    Adesão de contratos
                  </a>
                  <a href="#" className="dropdown-item">
                    Transferência de custódia
                  </a> */}
                  <hr className="dropdown-divider"/>

                  {(this.context.state.messages.msg.length !== 0?
                    

                    <Link to='/messages' className="dropdown-item" >
                      
                    <span className="icon is-small">
                      <i className="fas fa-circle" aria-hidden="true"></i>
                    </span>
                    <span> Mensagens</span>

                    </Link>
                  :
                  <Link to='/messages' className="dropdown-item" >

                    <span> Mensagens</span>

                    </Link>
                  )}

                  
                  <a href="#" className="dropdown-item">
                    Senha
                  </a>
                  {/* <a href="#" className="dropdown-item">
                    Assinatura Eletrônica
                  </a> */}
                  {/* <a className="dropdown-item" onClick={() => this.logoutUser()}> */}
                  <Link to='/' className="dropdown-item" onClick={() => this.logoutUser()}>
                    <span className="icon is-small">
                      <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
                    </span>
                    <span> Sair</span>

                  </Link>
                    
                  {/* </a> */}
                </div>
              </div>
            </div>

            {/* ------------------------- DROPDOWN MENU ------------------------- */}

            </div>
            :            
            <div className='button-login navbar-end navbar-item'>
              <Link to='/login'><button className="button is-danger" type='button'>Entrar</button></Link>
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