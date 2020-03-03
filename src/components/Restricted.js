import React, { Component } from 'react';
// import {Link, BrowserRouter as Router } from 'react-router-dom';
// import InvestimentTab from './InvestmentTab';
// import LoansTab from './LoansTab';
// import WalletTab from './WalletTab';
// import RisksTab from './RisksTab';

class Restricted extends Component {

  constructor(props){
    super(props);
    this.state = { 
      selectedOption: ''      
    };
    
  }

  handleChange = (tabName) => { 
    this.setState({
      selectedOption: tabName,
    });

    console.log(tabName);
    
  }
  render() {
    return (
        <div className='container'> 
        {/* <Router> */}
             <p className="title is-4">Minha Área Exclusiva</p>

             <p className="subtitle is-6">Destaques</p>

             <div className="tabs is-boxed">

              <ul>
                <li className={(this.state.selectedOption === 'opt1'? 'is-active': '')}  onClick={e => this.handleChange('opt1')}>
                  {/* <Link to={"/investmentstab"}> */}
                  <a>
                    <span className="icon is-small"><i className="fas fa-coins" aria-hidden="true"></i></span>
                    <span>Quero investir</span>
                  </a>
                  {/* </Link> */}
                </li>
                <li className={(this.state.selectedOption === 'opt2'? 'is-active': '')} onClick={e => this.handleChange('opt2')}>
                  {/* <Link to={"/loanstab"}> */}
                  <a>
                    <span className="icon is-small"><i className="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
                    <span>Quero empréstimo</span>
                  {/* </Link> */}
                  </a>
                </li>
                <li className={(this.state.selectedOption === 'opt3'? 'is-active': '')} onClick={e => this.handleChange('opt3')}>
                  {/* <Link to={"/wallettab"}> */}
                  <a>
                    <span className="icon is-small"><i className="fas fa-wallet" aria-hidden="true"></i></span>
                    <span>Carteira de investimentos</span>
                  </a>
                  {/* </Link> */}
                </li>
                <li className={(this.state.selectedOption === 'opt4'? 'is-active': '')} onClick={e => this.handleChange('opt4')}>
                  {/* <Link to={"/riskstab"}> */}
                  <a>
                    <span className="icon is-small"><i className="fas fa-search-dollar" aria-hidden="true"></i></span>
                    <span>Análise de risco</span>
                  </a>
                  {/* </Link> */}
                </li>
              </ul>
            </div>

            <div>{this.state.selectedOption}</div>

            <div className="media-content" style={{'display':(this.state.selectedOption === 'opt1'? true:'none')}}>
              <div className='container'>
                <p>teste</p>
              </div>
            </div>
            
        </div>
    );
  }
}

export default Restricted;