import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link, Redirect } from 'react-router-dom';

import AppContext from '../../context/AppContext';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      cpf: '', 
      password: '',
      dadosInvalidos: 0,
      redirect: false
    };
    this.service = new AuthService();
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/' />
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const cpf = this.state.cpf;
    const password = this.state.password;

    if(cpf === "" || password === ""){
      this.setState({
        dadosInvalidos: 1,
      });
    }else{
      this.service.login(cpf, password)
      .then( response => {
        this.setState({ cpf: "", password: "" });

        this.setState({
          redirect: true
        });

        this.context.getUser(response)
      })
      .catch( error => {
        console.log(error);

        if(this.state.cpf === "" || this.state.password === "") //caso o cpf esteja nulo
        {
          this.setState({
            dadosInvalidos: 1,
          });
  
        }else{ // fluxo normal do error
          this.setState({
            dadosInvalidos: 2,
          });
        }
      
      })
    }

    
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    this.setState({dadosInvalidos:0});
  }
    
  render(){
    return(
      <AppContext.Consumer>
        { context => (
          
          <div>
            {this.renderRedirect()}
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
                {(this.state.dadosInvalidos === 1?<p className="help is-danger">Digite o CPF e senha!</p>:<div></div>)}
                {(this.state.dadosInvalidos === 2?<p className="help is-danger">CPF ou senha inválidos!</p>:<div></div>)}
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