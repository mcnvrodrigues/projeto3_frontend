import React, { Component } from 'react';


import Service from './service';

import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

class ProfileForm extends Component {
    constructor(props){
        super(props);
        this.state = { 
          estado: 'AC',
          city: '',
          imageUrl: '',
          file: '',
          redirect: false,
          loading: false,
        };
        this.service = new Service();
      }

    renderRedirect = () => {
    
        if (this.state.redirect) {
          
          return <Redirect to='/' />
        }
      }

      
  
      handleFormSubmit = (event) => {
        event.preventDefault();       
        
        this.setState({
          loading: true
        })
        const id = this.context.state.confirmationCode;

        const uploadData = new FormData();
        uploadData.append("imageUrl", this.state.file);


        this.service.handleUpload(uploadData)
        .then(response => {
            // console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ imageUrl: response.secure_url });

            this.service.profile(id, this.state.estado, this.state.city, this.state.imageUrl)
            .then( response => {
                          
                this.setState({
                  redirect: true
                });
                console.log(response);
                
            })
            .catch( error => console.log(error) ) 
        })
        .catch(err => {
          console.log("Error while uploading the file: ", err);
        });
 
      }
      
      handleChange = (event) => { 

        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log(`profile form >>> name : ${name} value: ${value}`);
        
      }

      handleFileUpload = e => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
        this.setState({
          file: e.target.files[0]
        })
      
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

                            <div className="field">
                                  <label className="label">Estado</label>
                                  <div className="control">
                                    <div className="select">
                                      <select name='estado' onChange = {e => this.handleChange(e)}>
                                        <option>AC</option>
                                        <option>AL</option>
                                        <option>AP</option>
                                        <option>AM</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                              <div className="field">
                                <label className="label">Cidade</label>
                                <div className="control">
                                  <input className="input" type="text"  name='city' value={this.state.city} onChange={ e => this.handleChange(e)}/>
                                </div>
                              </div>             

                              <div className="field">
                                <label className="label">foto</label>
                                <div className="control">
                                  <input className="input" type="file" name='photo' onChange={(e) => this.handleFileUpload(e)}/>
                                </div>
                              </div>          

                              {(this.state.loading?
                              <progress class="progress is-danger" max="100">30%</progress>
                              :
                              <div></div>
                              )}
                              

                              <div className="field is-grouped">
                                <div className="control">
                                  <button className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                  <button className="button is-link is-light">Cancel</button>
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