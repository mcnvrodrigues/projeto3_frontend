import React, { Component } from 'react';
import AuthService from './auth-service';
import AppContext from '../../context/AppContext';

class Confirmation extends Component{

  constructor(props){
    super(props);
    this.state = { 
      email: '',
      psswd: '',
      confpsswd: ''
    };
    this.service = new AuthService();
  }

  componentDidMount(){
    
    let confirmation = this.props.match.params.confirmation;

    console.log('Confirmation : ', confirmation);

    
    this.service.confirmation(confirmation)
    .then( response => {
      this.context.getUser(response);
      
      this.setState({
        email: response.user.email
      })
    })
    .catch(err => console.log(err));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const psswd = this.state.psswd;
    const confpsswd = this.state.confpsswd;

    this.service.createpsw(email, psswd, confpsswd)
    .then( response => {
        this.setState({
            email: "",
            psswd: "",
            confpsswd: ""
        });
        console.log(response);
        
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
      
                        <label className="label">Crie uma senha</label>
      
                          <div className="control">
                            <input className="input" type="password"  name="psswd" value={this.state.psswd} onChange={ e => this.handleChange(e)}/>
                          </div>
      
                      </div>  

                      <div className="field">
      
                        <label className="label">Confirme a sua senha</label>
      
                          <div className="control">
                            <input className="input" type="password"  name="confpsswd" value={this.state.confpsswd} onChange={ e => this.handleChange(e)}/>
                          </div>
      
                      </div> 
      
                      <div className="control">
                        <input type='submit' className="button is-link  is-fullwidth"/>
                      </div>

                    </form>                   
      
                  </div>
                
                </div>
              </div>
              )}
            </AppContext.Consumer>
          );
    }
}

Confirmation.contextType = AppContext;
export default Confirmation;