import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CanvasJSReact from '../canvasjs.react';
import AppContext from '../context/AppContext';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// import InvestimentTab from './InvestmentTab';
// import LoansTab from './LoansTab';
// import WalletTab from './WalletTab';
// import RisksTab from './RisksTab';

class Restricted extends Component {

  constructor(props){
    super(props);
    this.state = { 
      selectedOption: 'opt1'      
    };
    
  }

  handleChange = (tabName) => { 
    this.setState({
      selectedOption: tabName,
    });

    console.log(tabName);
    
  }
  render() {

    const options = {
			animationEnabled: true,
			exportEnabled: false,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Transações"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Emprestimos" },
					{ y: 24, label: "Investimentos" },
					{ y: 20, label: "Pagamentos" },
					{ y: 14, label: "Inadimplência" }
				]
			}]
		}
    return (
      <AppContext.Consumer>
        {
          context => (
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

          <div><b>Saldo </b> R$ {(context.state.loggedInUser.balance ? context.state.loggedInUser.balance.toFixed(2):'0.00')}</div>
            </div>

            <div className="media-content" style={{'display':(this.state.selectedOption === 'opt1'? true:'none')}}>
              <div className='container'>
                
                <div className='box conftab has-background-primary'>
                  <h2 className='subtitle is-2'>Investimento simples, previsível e justo</h2>
                  <h5 className='subtitle is-5'>Na Commoney você investe em crédito. Diversificando os seus investimentos, os retornos podem ser maiores que o mercado, fácil e sem burocracia.</h5>
                  <Link to={"/dashboard/loans"}><button class="button is-primary is-inverted is-outlined">Quero Investir</button></Link>
                </div> 
                
              </div>
            </div>

            <div className="media-content" style={{'display':(this.state.selectedOption === 'opt2'? true:'none')}}>
              <div className='container'>
                
                <div className='box conftab has-background-success'>
                  <h2 className='subtitle is-2'>Empréstimo descomplicado e sem taxas abusivas</h2>
                  <h5 className='subtitle is-5'>Nós tornamos isso possível. Muito além de viabilizar o acesso à empréstimos, propomos uma análise de crédito humanizada a fim de diminuir os juros.</h5>
                  <Link to={"/dashboard/loan-request"}><button class="button is-primary is-inverted is-outlined">Quero Empréstimo</button></Link>
                </div> 
                
              </div>
            </div>

            <div className="media-content" style={{'display':(this.state.selectedOption === 'opt3'? true:'none')}}>
              <div className='container'>
                
                <div className='box conftab has-background-warning'>
                  <h2 className='subtitle is-2'>Monte uma carteira de investimentos</h2>
                  <h5 className='subtitle is-5'>Investindo pela Commoney você lucra como banco e incorre nos mesmos riscos que as grandes instituições financeiras.</h5>

                  <h5 className='subtitle is-5'><b>IMPORTANTE:</b> Assim como investimentos em debentures e na bolsa, a Commoney é um investimento de risco. Indicado somente para investidores com este perfil.</h5>
                  {/* <Link to={"/dashboard/loan-request"}><button class="button is-primary is-inverted is-outlined">Quero Empréstimo</button></Link> */}
                </div> 
                
              </div>
            </div>

            <div className="media-content" style={{'display':(this.state.selectedOption === 'opt4'? true:'none')}}>
              <div className='container'>
                
                <div className='box conftab has-background-info'>
                  <h2 className='subtitle is-2'>Análise de risco</h2>
                  <h5 className='subtitle is-5'>O score da Commoney, foi desenvolvido considerando não apenas as classificações de risco convencionais. Possuímos variáveis próprias que nos permite alcançar um patamar mais preciso de classificação e precificação dos empréstimos.</h5>
                  {/* <Link to={"/dashboard/loan-request"}><button class="button is-primary is-inverted is-outlined">Quero Empréstimo</button></Link> */}
                </div> 
                
              </div>
            </div>

            <hr></hr>

            <CanvasJSChart options = {options} />
            
        </div>
        )
      }
      
    </AppContext.Consumer>
    );
  }
}

export default Restricted;
