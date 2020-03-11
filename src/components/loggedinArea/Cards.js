import React, { Component } from 'react';
import AppContext from '../../context/AppContext';

class Cards extends Component{

  constructor(props){
    super(props);

    const first_name = (this.props.loanp.claimantName).substring(0, (this.props.loanp.claimantName).indexOf(" "));
    const initial = (this.props.loanp.claimantName).substring((this.props.loanp.claimantName).indexOf(" ") + 1, (this.props.loanp.claimantName).indexOf(" ") +2);
    const shortName = first_name + ' ' + initial + '.';
    const amount_v = this.props.loanp.amount;
    const installments_v = this.props.loanp.installments;
    const rate_v = this.props.loanp.rate * 12;
    const singleQuotaValue_v = this.props.loanp.singleQuotaValue;
    const imgPath_v = this.props.loanp.claimantPhoto;


    this.state = { 
      name: shortName,
      amount: amount_v,
      installments: installments_v,
      rate: rate_v,
      singleQuotaValue: singleQuotaValue_v,
      imgPath: imgPath_v
    };
    
  }

  render(){

    return(
      <AppContext.Consumer>
        {context => ( 
          <React.Fragment>
          <br/>


                    <div className="card card-width">
                    <div className="card-content">
                    <div className="media">
                          <div className="media-left">
                            <figure className="image is-64x64">
                              <img className="is-rounded" src={this.state.imgPath} alt="Placeholder image"/>
                            </figure>
                          </div>

                          <div className="media-content">
                            <p className="title is-4" style={{'color':'#272976'}}>{this.state.name}</p>
                            <p className="subtitle is-6">São Paulo</p>
                          </div>
                          
                        </div>

                      </div>
                      
                      <div className="card-content">
                        
                       
                        
                        <div className="content">
                        <div className='investments-content'>
                          <div className='media-content'>
                            <p className='subtitle is-6'>Solicitado</p>
                            <p className='title is-6' style={{'color':'green'}}>R$ {this.state.amount}</p>
                          </div>
                          <div className='media-content'>
                            <p className='subtitle is-6'>Cotas</p>
                            <p className='title is-6' style={{'color':'green'}}>R$ {this.state.singleQuotaValue}</p>
                           
                          </div>

                          <div className='media-content'>
                            <p className='subtitle is-6'>Lucro máximo</p>
                            <p className='title is-6' style={{'color':'green'}}>{this.state.rate}% / 12m</p>
                           
                          </div>
                          
                        </div>
                         
                          
                        </div>



                      </div>
                    </div>

          </React.Fragment>

        )}      
      </AppContext.Consumer>
    );
  }
}

Cards.contextType = AppContext;
export default Cards;