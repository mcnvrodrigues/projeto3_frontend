// auth/Signup.js

import React, { Component } from 'react';
import AuthService from './auth-service';

import { Link, Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import InputMask from 'react-input-mask';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      cpf: '',
      email: '',
      celular: '',
      nome: '',
      cpfUtilizado: 0,
      redirect: false
      // username: '',       
      // password: '' 
    };
    this.service = new AuthService();
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/confirmation' />
    }
  }



  handleFormSubmit = (event) => {
    event.preventDefault();
    const cpf = this.state.cpf.replace(/[^\d]+/g,'');
    const email = this.state.email;
    const celular = this.state.celular;
    const nome = this.state.nome;
    // const username = this.state.username;
    // const password = this.state.password;

    if(cpf === "" || email === "" || celular === "" || nome === ""){
      this.setState({
        cpfUtilizado: 1,
      });
    }else{
      this.service.signup(cpf, email, celular, nome)
    .then( response => {
        this.setState({
            cpf: "",
            email: "",
            celular: "",
            nome: "",
            redirect: false
            // username: "", 
            // password: "",
        });
        // console.log(response);
        // this.context.getUser(response)
        this.setState({
          redirect: true
        })
        
    })
    .catch( error => {
      console.log(error);

      if(this.state.cpf === "") //caso o cpf esteja nulo
      {
        this.setState({
          cpfUtilizado: 1,
        });

      }else{ // fluxo normal do error
        this.setState({
          cpfUtilizado: 2,
        });
      }
      
    })

    }
    
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value,
      cpfUtilizado:0});
  }

  render(){
    return(
      <AppContext.Consumer>
        { context => (          
          <div>
            {this.renderRedirect()}
          <div className="container">
            <div className="level">

            <div className="level-item signup-form">
            
              <form onSubmit={this.handleFormSubmit}>
                {/* <label>Username:</label> */}

                <div className="field">

                  <label className="label">CPF</label>

                    <div className="control has-icons-left has-icons-right">
                      <InputMask mask="999.999.999-99" className={(this.state.cpfUtilizado === 2 ?"input is-danger": "input")} type="text"  name="cpf" value={this.state.cpf} onChange={ e => this.handleChange(e)}/>

                        <span className="icon is-small is-left">
                          <i className="fas fa-id-card"></i>
                        </span>
                        {(this.state.cpfUtilizado === 2 ?
                        <span className="icon is-small is-right">
                          <i className="fas fa-exclamation-triangle"></i>
                        </span>:
                        <div></div>)}
                        {(this.state.cpfUtilizado === 2?<p className="help is-danger">CPF já cadastrado!</p>:<div></div>)}
                    </div>

                </div>

                {/* <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/> */}
                
                <div className="field">

                    <label className="label">Email</label>

                      <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="email@email.com" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
                        
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

                    <div className="control has-icons-left">

                      <InputMask mask="(099) \99999-9999" className="input" type="phone"  name="celular" value={this.state.celular} onChange={ e => this.handleChange(e)}/>

                        <span className="icon is-small is-left">
                          <i className="fas fa-mobile"></i>
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

                    <div className="control has-icons-left esp-bottom">

                      <input className="input" type="text" placeholder="Quebrado de tal" name="nome" value={this.state.nome} onChange={ e => this.handleChange(e)}/>

                        <span className="icon is-small is-left">
                          <i className="fas fa-user-alt"></i>
                        </span>

                        {/* <span class="icon is-small is-right">
                          <i class="fas fa-exclamation-triangle"></i>
                        </span> */}
                    </div>

                    {/* <p class="help is-danger">This email is invalid</p> */}
                </div>

                {/* <input type="submit" value="Signup" /> */}

               
                <div className="control">
                  <input type='submit' className="button is-link  is-fullwidth" value='Cadastrar'/>
                </div>
                
                {(this.state.cpfUtilizado === 1?<p className="help is-danger">Preencha todos os campos!</p>:<div></div>)}

                <p>Já possui cadastro?
                  <Link to={"/login"}> Login</Link>
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

Signup.contextType = AppContext;
export default Signup;