import React, { Component } from 'react';
// import AuthService from './auth/auth-service';
import AppContext from '../context/AppContext';

class AvailableLoan extends Component {
  render() {
    return (
      <AppContext.Consumer>
          {context => (
              <div className="card loan">
             
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div >

                    
                    <p className="title is-6">{this.props.info.name}</p>
                    <p className="subtitle is-6">{this.props.info.email}</p>
                    </div>
                  </div>
                </div>
            
                <div className="content">

                  <div className='cardLine'>

                    <div className="card-content line-content">
                      <div className="media">
                        <div className="media-left">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>

                        <div className="media-content">
                            <p>R$ {this.props.info.loan}</p>
                        </div>
                      </div>
                    </div>
                      
                  </div> 

                  <div className='cardLine'>

                    <div className="card-content line-content">
                      <div className="media">
                        <div className="media-left">
                            <i className="far fa-calendar-alt"></i>
                        </div>

                        <div className="media-content">
                            <p>{this.props.info.installments} parcelas</p>
                        </div>
                      </div>
                    </div>
                      
                  </div> 

                  <div className='cardLine'>

                    <div className="card-content line-content">
                      <div className="media">
                        <div className="media-left">
                            <i className="fas fa-percentage"></i>
                        </div>

                        <div className="media-content">
                            <p>{this.props.info.rate} a.a.</p>
                        </div>
                      </div>
                    </div>
                      
                  </div> 

                </div>

              </div>
            </div>
          )}
      </AppContext.Consumer>
    );
  }
}

AvailableLoan.contextType = AppContext;
export default AvailableLoan;