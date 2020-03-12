import React, { Component } from 'react';
import AuthService from './auth-service';
import { Redirect } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Confirmation extends Component{

  constructor(props){
    super(props);
    this.state = { 
      email: '',
      psswd: '',
      confpsswd: '',
      statusSenha: 0,
      redirect: false
    };
    this.service = new AuthService();
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/education'/>
    }
  }

  componentDidMount(){
    
    let confirmation = this.props.match.params.confirmation;

    console.log('Confirmation : ', confirmation);

    
    this.service.confirmation(confirmation)
    .then( response => {
      // this.context.getUser(response);
      console.log('confirmation ++++', response);
      this.setState({
        email: response.user.email
      });

      this.context.getConfirmationCode(confirmation);
    })
    .catch( error => {
      // console.log(error);
      console.log('confirmation code nao existe')
      this.setState({
        statusSenha: 4, // caso o confirmation code não exista
      });  
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const psswd = this.state.psswd;
    const confpsswd = this.state.confpsswd;
    const confirmation = this.props.match.params.confirmation;

    if(psswd === "" || confpsswd === ""){
      this.setState({
        statusSenha: 1,
      });
    }else if (psswd !== confpsswd){
      this.setState({
        statusSenha: 3,
      });
    }else{
      this.service.createpsw(email, psswd, confpsswd, confirmation)
      .then( response => {
          this.setState({
              email: "",
              psswd: "",
              confpsswd: ""
          });
  
          this.setState({
            redirect: true
          })
          console.log(response);
          
      })
      .catch( error => {
        console.log(error);

        if(this.state.psswd === "" || this.state.confpsswd === "") //caso as senhas estejam nulas
        {
          this.setState({
            statusSenha: 1,
          });
  
        }else{ // fluxo normal do error
          this.setState({
            statusSenha: 2,
          });
        }
      
      })
    }
    
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    this.setState({statusSenha:0});
  }

    render(){
        return(
            <AppContext.Consumer>
              { context => (
                <div>
                  {this.renderRedirect()}
                  {(this.state.statusSenha === 4?

                    <span className="tag is-danger">Link de confirmação não existe. Favor verificar seu email.</span>

                  :
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
  
                        {(this.state.statusSenha === 1?<p className="help is-danger">Crie uma senha!</p>:<div></div>)}
                        {(this.state.statusSenha === 3?<p className="help is-danger">As senhas não são idênticas!</p>:<div></div>)}
                        
                      </form>                   
        
                    </div>
                  
                  </div>
                </div>)}
                  
              </div>
              )}
            </AppContext.Consumer>
          );
    }
}

Confirmation.contextType = AppContext;
export default Confirmation;