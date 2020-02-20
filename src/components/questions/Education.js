import React, { Component } from 'react';


import AuthService from '../auth/auth-service';

import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = { 
          cpf: '',
          email: '',
          celular: '',
          nome: '',
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
                {this.renderRedirect()}
              <div className="container">
                <div className="level">
    
                <div className="level-item">

                    
                
                  <form onSubmit={this.handleFormSubmit}>

                  <h1 className="title">
                      <p>Qual o seu grau de</p>
                      <p>escolaridade?</p>
                  </h1>

                <hr></hr>
                   

                    <div className="control">

                        <div className="box">                    
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Sem instrução
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Ensino Fundamental 1 (antigo primário)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Ensino Fundamental 2 (antigo ginásio)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Ensino Médio (antigo 2 grau)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Ensino Superior
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Pós Graduação
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div>

                        </div>


                    </div>    
                   
                    <div className="control">
                      <input type='submit' className="button is-link  is-fullwidth" value='Continuar'/>
                    </div>
                    
    
                   
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

export default Education;