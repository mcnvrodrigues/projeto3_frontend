import React, { Component } from 'react';


import Service from '../service';

import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Dependents extends Component {
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
          
          return <Redirect to='/' />
        }
      }

      dependents = (opt) => {
        switch(opt){
          case 'opt1':
            return 0;
          case 'opt2':
            return 1;
          case 'opt3':
            return 2;
          case 'opt4':
            return 3;
          case 'opt5':
            return 4;          
          default:
            return '';
        }
      }
  
      handleFormSubmit = (event) => {
        event.preventDefault(); 
        
        let dep = this.dependents(this.state.selectedOption);

        this.service.dependents(this.context.state.confirmationCode, dep)
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
                      <p>Você tem dependentes?</p>
                      
                  </h1>

            

                <hr></hr>
                   

                    <div className="control">

                        <div className="box">                    
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt1" checked={this.state.selectedOption === 'opt1'} onChange={ e => this.handleChange(e)}/> Não tenho dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt2"  checked={this.state.selectedOption === 'opt2'} onChange={ e => this.handleChange(e)}/> 1 dependente
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt3" checked={this.state.selectedOption === 'opt3'} onChange={ e => this.handleChange(e)}/> 2 dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt4" checked={this.state.selectedOption === 'opt4'} onChange={ e => this.handleChange(e)}/> 3 dependentes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box"> 
                            <div className="media-content">
                                <div className="content">
                                    <label className="radio">
                                        <input type="radio" value="opt5" checked={this.state.selectedOption === 'opt5'} onChange={ e => this.handleChange(e)}/> 4 ou mais dependentes
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

Dependents.contextType = AppContext;
export default Dependents;