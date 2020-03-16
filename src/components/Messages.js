import React, { Component } from 'react';
import Service from './service';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

class Messages extends Component{

  constructor(props){
    super(props);
    this.state = { 
      messages:'',
      redirect: false
    };
    this.service = new Service();
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/dashboard'/>
    }
  }

  

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.context.state.messages.forEach(message => {
        this.service.messagesres(message._id)
        .then(() => {
            console.log('Mensagem lida');
        })
    });

   
    
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
                  
                  <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">Nova Mensagem</p>
                        <button className="delete" aria-label="close" onClick={e => this.handleFormSubmit(e)}></button>
                        </header>
                        <section className="modal-card-body">
                        
                        {(this.context.state.messages.length !== 0 ? 
                            
                            this.context.state.messages.map((message, i) => {
                                return <article class="message is-info">
                                <div className="message-header">
                                  <p>Info</p>
                                  
                                </div>
                                <div className="message-body">
                                  {message.info}
                                </div>
                              </article>
                            })
                            
                        :
                            <p>Você não possui novas mensagens</p>
                        )}

                        
                        </section>
                        <footer className="modal-card-foot">
                        <button className="button is-success" onClick={e => this.handleFormSubmit(e)}>OK</button>
                        
                        </footer>
                    </div>
                </div>
              </div>
              )}
            </AppContext.Consumer>
          );
    }
}

Messages.contextType = AppContext;
export default Messages;