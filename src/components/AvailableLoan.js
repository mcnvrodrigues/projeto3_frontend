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
                    <figure className="image is-64x64">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div >
                      <p className="title is-6">{(this.props.loanp.claimantName).substring(0, (this.props.loanp.claimantName).indexOf(" "))}</p>
                    </div>
                  </div>
                </div>
            
                <div className="content">

                  <div className='investments-content'>

                    {/* <div className="card-content line-content">
                      <div className="media"> */}
                        <div className="media-left">
                            <i className="fas fa-hand-holding-usd"></i>
                        </div>

                        <div className="media-content">
                        <p className='subtitle is-6'>Valor</p>
                            <p className='title is-6' style={{'color':'green'}}>R$ {this.props.loanp.amount}</p>
                        </div>
                      {/* </div>
                    </div> */}

                    <div className="media-left">
                            <i className="far fa-calendar-alt"></i>
                        </div>

                        <div className="media-content">
                        <p className='subtitle is-6'>Parcelas</p>
                            <p className='title is-6' style={{'color':'green'}}>{this.props.loanp.installments} parcelas</p>
                        </div>

                        <div className="media-left">
                            <i className="fas fa-percentage"></i>
                        </div>

                        <div className="media-content">
                        <p className='subtitle is-6'>Juros</p>
                            <p className='title is-6' style={{'color':'green'}}>{this.props.loanp.rate} a.m.</p>
                        </div>
                      
                  </div> 

                  {/* <div className='cardLine'>

                    <div className="card-content line-content">
                      <div className="media">
                        <div className="media-left">
                            <i className="far fa-calendar-alt"></i>
                        </div>

                        <div className="media-content">
                            <p>{this.props.loanp.installments} parcelas</p>
                        </div>
                      </div>
                    </div>
                      
                  </div>  */}

                  {/* <div className='cardLine'>

                    <div className="card-content line-content">
                      <div className="media">
                        <div className="media-left">
                            <i className="fas fa-percentage"></i>
                        </div>

                        <div className="media-content">
                            <p>{this.props.loanp.rate} a.m.</p>
                        </div>
                      </div>
                    </div>
                      
                  </div>  */}

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