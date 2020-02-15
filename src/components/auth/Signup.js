// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth-service';

import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      cpf: '',
      email: '',
      celular: '',
      nome: '',
      // username: '',       
      // password: '' 
    };
    this.service = new AuthService();
  }



  handleFormSubmit = (event) => {
    event.preventDefault();
    const cpf = this.state.cpf;
    const email = this.state.email;
    const celular = this.state.celular;
    const nome = this.state.nome;
    // const username = this.state.username;
    // const password = this.state.password;
  
    this.service.signup(cpf, email, celular, nome)
    .then( response => {
        this.setState({
            cpf: "",
            email: "",
            celular: "",
            nome: "",
            // username: "", 
            // password: "",
        });
        // console.log(response);
        // this.context.getUser(response)
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
          <div className="container">
            <div className="level">

            <div className="level-item">
            
              <form onSubmit={this.handleFormSubmit}>
                {/* <label>Username:</label> */}

                <div className="field">

                  <label className="label">CPF</label>

                    <div className="control">
                      <input className="input" type="text" placeholder="xxx.xxx.xxx-xx" name="cpf" value={this.state.cpf} onChange={ e => this.handleChange(e)}/>
                    </div>

                </div>

                {/* <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/> */}
                
                <div className="field">

                    <label className="label">Email</label>

                      <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="email@email.com" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
                        
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>

                        {/* <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span> */}

                      </div>

                    {/* <p class="help is-danger">This email is invalid</p> */}

                </div>

                <div className="field">

                    <label className="label">Celular</label>

                    <div className="control has-icons-left has-icons-right">

                      <input className="input" type="text" placeholder="(11) 9xxxx xxxx" name="celular" value={this.state.celular} onChange={ e => this.handleChange(e)}/>

                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>

                        {/* <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span> */}
                    </div>

                    {/* <p class="help is-danger">This email is invalid</p> */}
                </div>

                {/* <label>Password:</label>
                <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} /> */}
                
                <div className="field">

                    <label className="label">Nome</label>

                    <div className="control has-icons-left has-icons-right">

                      <input className="input" type="text" placeholder="Quebrado de tal" name="nome" value={this.state.nome} onChange={ e => this.handleChange(e)}/>

                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>

                        {/* <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span> */}
                    </div>

                    {/* <p class="help is-danger">This email is invalid</p> */}
                </div>

                {/* <input type="submit" value="Signup" /> */}

               
                <div className="control">
                  <input type='submit' className="button is-link  is-fullwidth"/>
                </div>
                

                <p>Already have account? 
                  <Link to={"/"}> Login</Link>
              </p>
              </form>
        
              

            </div>
          
          </div>
        </div>
        )}
      </AppContext.Consumer>
    );
  }
}

Signup.contextType = AppContext;
export default Signup;