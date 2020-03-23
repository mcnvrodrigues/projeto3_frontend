import React, { Component } from 'react';
import AppContext from '../context/AppContext';
import Service from './service';
import { Link, Redirect } from 'react-router-dom';
import DefaultMessage from './DefaultMessage';


class BankStatement extends Component {

  constructor(props){
    super(props);
    this.state = { 
      operations: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.statements(this.context.state.loggedInUser._id)
    .then(response => {
      this.setState({
        operations: response        
      });      
      console.log('bank statements >>>', response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  formatDate = (date) => {
    let dia = date.substr(8,2);
    let mes = date.substr(5,2);
    let ano = date.substr(0,4);

    let hora = date.substr(11,2);
    let minuto = date.substr(14,2);

    return `${dia}/${mes}/${ano} - ${hora}h${minuto}`;
  }

  bankCode = (code) => {
    switch(code){
      case 'Request':
        return 'Empréstimo';
      case 'Investment':
        return 'Investimento';
      case 'Deposit':
        return 'Depósito';
      case 'Withdrawal':
        return 'Saque';
      case 'Transfer':
        return 'Transferência';
      case 'Payment':
        return 'Pagamento';
      default:
        return 'Desconhecido';
    }
  }

  transactionColor = (code) => {
    switch(code){
      case 'Request':
        return 'tag is-warning';
      case 'Investment':
        return 'tag is-primary';
      case 'Deposit':
        return 'tag is-white'; 
      case 'Withdrawal':
        return 'tag is-danger';
      case 'Transfer':
        return 'tag is-link';
      case 'Payment':
        return 'tag is-success';
      default:
        return 'tag is-dark';
    }
  }


  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="container">          
              <p className='title is-4' style={{'color':'#060A4E'}}>Extrato</p>
                        {(this.state.operations ? 

                            (this.state.operations.trans.length !== 0 ?
                              this.state.operations.trans.map((statem, i) => {
                                return (
                                    <div className="level">
                                        <div className="level-item">
                                            <div className="box statements">                                                     
                                            <h5 className="title is-5"><i className="far fa-calendar-alt"></i> {this.formatDate(statem.createdAt)}</h5>
                                            <br/>
                                            <span className={this.transactionColor(statem.code)}>{this.bankCode(statem.code)} <button class="button is-white btnstatement">R$ {(statem.amount).toFixed(2)}</button></span>
                                            
                                            </div>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                                )
                                })
                            :
                            <DefaultMessage title = 'Nada para mostrar' message = 'Você ainda não realizou nenhuma transação.'></DefaultMessage>
                            )
                        
                            
                        
                        :
                        <progress className="progress is-small is-primary" max="100">15%</progress>
                        )}
          </div>

        )}
        

        </AppContext.Consumer>
    );
  }
}

BankStatement.contextType = AppContext;
export default BankStatement;