import React, { Component } from 'react';


import Service from './service';

import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

class ProfileForm extends Component {
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

      
  
      handleFormSubmit = (event) => {
        event.preventDefault(); 
        
        

        // this.service.education(this.context.state.confirmationCode, degree)
        // .then( response => {
                      
        //     this.setState({
        //       redirect: true
        //     });
        //     console.log(response);
            
        // })
        // .catch( error => console.log(error) )    
 
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

                              <div class="field">
                                <label class="label">Cidade</label>
                                <div class="control">
                                  <input class="input" type="text" placeholder="Text input"/>
                                </div>
                              </div>             

                              <div class="field">
                                <label class="label">photo</label>
                                <div class="control">
                                  <input class="input" type="file" name='photo'/>
                                </div>
                              </div>          

                              <div class="field">
                                <label class="label">Estado</label>
                                <div class="control">
                                  <div class="select">
                                    <select>
                                      <option>Select dropdown</option>
                                      <option>With options</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              

                              <div class="field is-grouped">
                                <div class="control">
                                  <button class="button is-link">Submit</button>
                                </div>
                                <div class="control">
                                  <button class="button is-link is-light">Cancel</button>
                                </div>
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

ProfileForm.contextType = AppContext;
export default ProfileForm;