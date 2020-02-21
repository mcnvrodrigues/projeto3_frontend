import React, { Component } from 'react';


import AuthService from '../auth/auth-service';

import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Dependents extends Component {
    constructor(props){
        super(props);
        this.state = { 
         
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
        
      
        // this.service.signup(cpf, email, celular, nome)
        // .then( response => {
        //     this.setState({
                
        //         redirect: false
                
        //     });
            
        //     this.setState({
        //       redirect: true
        //     })
            
        // })
        // .catch( error => console.log(error) )

        this.setState({
          redirect: true
        })
    
    
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
                      <p>Você tem dependentes?</p>
                  </h1>

                <hr></hr>
                   

                    <div className="control">

                        <div className="box">                    
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> Não tenho dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> 1 dependente
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> 2 dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> 3 dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" name="answer"/> 4 ou mais dependentes
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

export default Dependents;