import React, { Component } from 'react';


import Service from '../service';

import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = { 
          selectedOption: '',
          redirect: false
        };
        this.service = new Service();
      }

    renderRedirect = () => {
    
        if (this.state.redirect) {
          
          return <Redirect to='/dependents' />
        }
      }

      chosenDegree = (opt) => {
        switch(opt){
          case 'opt1':
            return 'Sem instrução';
          case 'opt2':
            return 'Ensino Fundamental 1';
          case 'opt3':
            return 'Ensino Fundamental 2';
          case 'opt4':
            return 'Ensino Médio';

          case 'opt5':
            return 'Ensino Superior';
          case 'opt6':
            return 'Pós Graduação';
          default:
            return '';
        }
      }
  
      handleFormSubmit = (event) => {
        event.preventDefault(); 
        
        let degree = this.chosenDegree(this.state.selectedOption);

        this.service.education(this.context.state.confirmationCode, degree)
        .then( response => {
                      
            this.setState({
              redirect: true
            });
            console.log(response);
            
        })
        .catch( error => console.log(error) )    
 
      }
      
      handleChange = (event) => { 
        this.setState({
          selectedOption: event.target.value,
        });
        
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

            <span className="tag is-danger">{this.state.selectedOption}</span>

                <hr></hr>
                   

                    <div className="control">

                        <div className="box">                    
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt1" checked={this.state.selectedOption === 'opt1'} onChange={ e => this.handleChange(e)}/> Sem instrução
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt2"  checked={this.state.selectedOption === 'opt2'} onChange={ e => this.handleChange(e)}/> Ensino Fundamental 1 (antigo primário)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt3" checked={this.state.selectedOption === 'opt3'} onChange={ e => this.handleChange(e)}/> Ensino Fundamental 2 (antigo ginásio)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt4" checked={this.state.selectedOption === 'opt4'} onChange={ e => this.handleChange(e)}/> Ensino Médio (antigo 2 grau)
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt5" checked={this.state.selectedOption === 'opt5'} onChange={ e => this.handleChange(e)}/> Ensino Superior
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt6" checked={this.state.selectedOption === 'opt6'} onChange={ e => this.handleChange(e)}/> Pós Graduação
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

Education.contextType = AppContext;
export default Education;