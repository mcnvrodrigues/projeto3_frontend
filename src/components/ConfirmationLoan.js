import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import dashboardContext from '../context/DashBoardContext';


class ConfirmationLoan extends Component{
  constructor(props){
    super(props);
    this.state = { 
      amount: 0,
      installments: '',      
      dueDate: '',   
      redirect: false   
    };    
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/dashboard/confirmationloanmessage'/>
    }
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleClickInstallments = (event) => { 

    // console.log('handleClick', event.target.value);
    this.setState({
      installments: event.target.value,
    });
    
  }

  handleClickDueDate = (event) => { 

    // console.log('handleClick', event.target.value);
    this.setState({
      dueDate: event.target.value,
    });
    
  }

  
  handleFormSubmit = (event) => {
    event.preventDefault();   
    
    this.context.requestLoan();
    this.setState({
      redirect: true
    })
    
  }

  render(){
    return(
        <dashboardContext.Consumer>
            {
                context => (
                    <React.Fragment>
                        {this.renderRedirect()}
                    <div className="container backg">

                    <h3 className="title is-3" style={{'color': 'white'}}>Tudo certo, Tangamandapiano!</h3>

                    <h6 className="subtitle  is-6" style={{'color': 'white'}}>Você já pode avaliar as condições e finalizar o seu pedido de empréstimo:</h6>

                        
                        <div className="box">

                        <form onSubmit={this.handleFormSubmit}>
                        <div className="level">
                        <label className="label">Valor do Emprestimo</label>
                            <p>R$ {this.context.state.loanRequest.amount}</p>
                        </div>

                        <div className='level'>
                            <span className="tag is-info is-light">+ Juros</span>
                            <p>{this.context.state.loanRequest.rate}% a.m.</p>
                        </div>

                        <div className='level'>
                            <span className="tag is-info is-light">+ IOF</span>
                            <p>R$ {this.context.state.loanRequest.iof}</p>
                        </div>
                        

                        <div className='level'>
                            <span className="tag is-info is-light">+ CET</span>
                            <p>{this.context.state.loanRequest.cet}% a.m.</p>
                        </div>

                        <div className='level'>
                            <h6 className="subtitle  is-6">Parcelas</h6>
                            <p>{this.context.state.loanRequest.installments}x de R$ {this.context.state.loanRequest.intallmentAmount}</p>
                        </div>

                        <div className='level'>
                            <h6 className="subtitle  is-6">Vencimento</h6>
                            <p>dia {this.context.state.loanRequest.dueDate} de cada mês</p>
                        </div>

                        <div className="level">
                        <label className="label">Total a pagar</label>
                            <p>R$ {this.context.state.loanRequest.total}</p>
                        </div>

                        <div className="field is-grouped">
                  <div className="control">
                    {/* <Link to='/dashboard/confirmation-loan'><button className="button is-link">Salvar</button></Link> */}
                    <button type='submit' className="button is-link">Confirmar</button>
                  </div>
                </div>
                        </form>
                        </div>
                        
                    </div>
      </React.Fragment>
                )
            }
      
      </dashboardContext.Consumer>
    );
  }
}

ConfirmationLoan.contextType = dashboardContext;
export default ConfirmationLoan;