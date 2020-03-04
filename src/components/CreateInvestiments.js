import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import dashboardContext from '../context/DashBoardContext';

class CreateInvestiments extends Component{
  constructor(props){
    super(props);
    this.state = { 
      amount: 100,
      installments: 1,      
      dueDate: 1,  
      redirect: false    
    };
    
  }

  renderRedirect = () => {
    
    if (this.state.redirect) {
      
      return <Redirect to='/dashboard/confirmation-loan' />
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.amount > 0 && this.state.amount !== 1 && this.state.dueDate !== 1){

      
      this.context.state.loanRequest.total = (this.state.amount + (this.state.amount * ((this.context.state.loanRequest.rate + this.context.state.loanRequest.cet)/100)) + this.context.state.loanRequest.iof).toFixed(2);
      this.context.state.loanRequest.intallmentAmount = (this.context.state.loanRequest.total / this.state.installments).toFixed(2);

      this.setState({
        redirect: true
      });
    }    
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: Number(value)});
    this.context.state.loanRequest.amount = Number(event.target.value);
  }

  handleClickInstallments = (event) => { 

    //console.log('handleClick', event.target.value);
    this.setState({
      installments: Number(event.target.value),
    });

    this.context.state.loanRequest.installments= Number(event.target.value);
    
  }

  handleClickDueDate = (event) => { 

    console.log('handleClick', event.target.value);
    this.setState({
      dueDate: Number(event.target.value),
    });

    this.context.state.loanRequest.dueDate=Number(event.target.value);
  }

  render(){
    return(
      <dashboardContext.Consumer>
        {
          context => (
            <React.Fragment>
               {this.renderRedirect()}
            <div className="container">
            <div className='loan-form has-background-info'>
              <h3 className="title is-3 hearder-investiments has-text-white-ter">Solicite seu empréstimo</h3>
    
              <h6 className="subtitle is-6 hearder-investiments has-text-white-ter">Defina o valor, número de parcelas e dia de vencimento desejado:</h6>
             </div> 
              
              <div className="box box-form">

              <form onSubmit={this.handleFormSubmit}>
                <div className="field">
  
                  <label className="label">Valor do Emprestimo</label>
                  <div className="control">
                    <input className="input" type="number" placeholder="R$ 100,00" name='amount' value={this.state.amount} onChange={ e => this.handleChange(e)}/>
                  </div>
                </div>
  
                <div className="field">
                  <label className="label">Quantidade de parcelas</label>
  
                  {/* <div className="level ">
                    <button className="button is-rounded" value='6' onClick={ e => this.handleClickInstallments(e)} style={{'backgroundColor':(this.context.state.loanRequest.installments == 6 ? 'red': 'white')}}>6x</button>
                    <button className="button is-rounded" value='9' onClick={ e => this.handleClickInstallments(e)} style={{'backgroundColor':(this.context.state.loanRequest.installments == 9 ? 'red': 'white')}}>9x</button>
                    <button className="button is-rounded" value='12' onClick={ e => this.handleClickInstallments(e)} style={{'backgroundColor':(this.context.state.loanRequest.installments == 12 ? 'red': 'white')}}>12x</button>
                    <button className="button is-rounded" value='18' onClick={ e => this.handleClickInstallments(e)} style={{'backgroundColor':(this.context.state.loanRequest.installments == 18 ? 'red': 'white')}}>18x</button>
       
                  </div> */}

                <div class="control">
                  <select class="input" name="country" onClick={ e => this.handleClickInstallments(e)}>
                  <option value="6" >x6</option>
                    <option value="9">x9</option>
                    <option value="12">x12</option>
                    <option value="18">x18</option>
                  </select>
                </div>
                  
                </div>
              
                <div className="field">
                <label className="label">qual o melhor dia para o vencimento?</label>
                
                {/* <div className="level ">
                  <button className="button is-rounded" value='5' onClick={ e => this.handleClickDueDate(e)} style={{'backgroundColor':(this.context.state.loanRequest.dueDate == 5 ? 'red': 'white')}}>5</button>
                  <button className="button is-rounded" value='10' onClick={ e => this.handleClickDueDate(e)} style={{'backgroundColor':(this.context.state.loanRequest.dueDate == 10 ? 'red': 'white')}}>10</button>
                  <button className="button is-rounded" value='15' onClick={ e => this.handleClickDueDate(e)} style={{'backgroundColor':(this.context.state.loanRequest.dueDate == 15 ? 'red': 'white')}}>15</button>
                  <button className="button is-rounded" value='20' onClick={ e => this.handleClickDueDate(e)} style={{'backgroundColor':(this.context.state.loanRequest.dueDate == 20 ? 'red': 'white')}}>20</button>
                  <button className="button is-rounded" value='25' onClick={ e => this.handleClickDueDate(e)} style={{'backgroundColor':(this.context.state.loanRequest.dueDate == 25 ? 'red': 'white')}}>25</button>
                </div> */}


                <div class="control">
                  <select class="input" name="country" onClick={ e => this.handleClickDueDate(e)}>
                  <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                </div>
                </div>

               
  
                <div className="field">
                  <div className="control">
                    {/* <Link to='/dashboard/confirmation-loan'><button className="button is-link">Salvar</button></Link> */}
                    <button type='submit' className="button is-link">Continuar</button>
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

CreateInvestiments.contextType = dashboardContext;
export default CreateInvestiments;