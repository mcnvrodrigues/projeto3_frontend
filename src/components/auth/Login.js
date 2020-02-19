import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { cpf: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const cpf = this.state.cpf;
    const password = this.state.password;

    this.service.login(cpf, password)
    .then( response => {
        this.setState({ cpf: "", password: "" });
        this.context.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <AppContext.Consumer>
        { context => (
          <div>
          <div className="container">
            
            <div className="level">

            <div className="level-item">
            
              <form onSubmit={this.handleFormSubmit}>
                {/* <label>Username:</label> */}

                <div className="field">

                  <label className="label">CPF</label>

                    <div className="control has-icons-left">
                      <input className="input" type="text" placeholder="xxx.xxx.xxx-xx" name="cpf" value={this.state.cpf} onChange={ e => this.handleChange(e)}/>

                      <span className="icon is-small is-left">
                          <i className="fas fa-id-card"></i>
                        </span>
                    </div>

                </div>

                <div className="field">

                  <label className="label">Senha</label>

                    <div className="control has-icons-left">
                      <input className="input" type="password"  name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>

                      <span className="icon is-small is-left">
                          <i className="fas fa-key"></i>
                        </span>
                    </div>

                </div>

               
                <div className="control">
                  <input type='submit' className="button is-link  is-fullwidth" value='Entrar'/>
                </div>
                

                <p>Ainda não possui cadastro?
                  <Link to={"/Signup"}> Cadastro</Link>
              </p>
              </form>
        
              

            </div>
          
          </div>
        </div>
        </div>
        )}
      </AppContext.Consumer>
    );
  }
}

Login.contextType = AppContext;
export default Login;