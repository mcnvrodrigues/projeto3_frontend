import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Restricted from './Restricted';
import CreateInvestments from './CreateInvestments';
import ConfirmationLoan from './ConfirmationLoan';
import ConfirmationLoanMessage from './ConfirmationLoanMessage';
import Loans from './Loans';
import Loan from './Loan';
import DashBoardContext from '../context/DashBoardContext';
import AppContext from '../context/AppContext';
import Service from './service';
import LoansRequested from './LoansRequested';
import LoanRequested from './LoanRequested';
import Investments from './Investments';
import Investment from './Investment';
import Approved from './Approved';
import BankStatement from './BankStatement';
import Payment from './Payment';
import PaymentInstallment from './PaymentInstallment';

 class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = { 
            cpf: '',
            loanRequest: {
                amount: 100,
                installments: 1,      
                dueDate: 1,
                rate: 2.81,
                iof: 43.56,
                cet: 4.63,
                intallmentAmount: 0,
                total:0
            }          
        };
        this.service = new Service();
    }

    componentDidMount(){
        console.log('dashboard props >>>', this.props);
    }

    requestLoan = () => {

        let amount_v = this.state.loanRequest.amount;
        let installments_v = this.state.loanRequest.installments;
        let dueDate_v = this.state.loanRequest.dueDate;
        let rate_v = this.state.loanRequest.rate;
        let iof_v = this.state.loanRequest.iof;
        let cet_v = this.state.loanRequest.cet;
        let intallmentAmount_v = this.state.loanRequest.intallmentAmount;
        let total_v = this.state.loanRequest.total;
        let cpf = this.context.state.loggedInUser.cpf;
        let id = this.context.state.loggedInUser._id;
        let name = this.context.state.loggedInUser.nome;
        let imgPath = this.context.state.loggedInUser.imgPath;


        if(this.context.state.loggedInUser.cpf){
            this.setState({
                cpf: this.context.state.loggedInUser.cpf,
            })

            this.service.loanRequest(amount_v, installments_v, dueDate_v, rate_v, iof_v, cet_v, intallmentAmount_v, total_v, 'A', cpf, id, name, 4, imgPath)
            .then(response => {
                console.log(response);            
            })
            .catch(error => console.log(error))
        }

        
    }
    
     

  render() {

    const contextValues = {
        state: this.state,
        requestLoan : this.requestLoan
        // getUser: this.getTheUser,
        // getConfirmationCode: this.getConfirmationCode
      }
    return (
        <AppContext.Consumer>
            {
                context => (
                    <DashBoardContext.Provider value = {contextValues}> 
           <div className="card-content">
                <div className="media">
                <Router>
                {/*     <h1>Nome >>> {this.context.state.loggedInUser.cpf}</h1> */}
                    {/* --------------------- menu ---------------------  */}
                    <div className="media-left">
                        
                        <aside className="menu" >
                            <p className="menu-label">
                                Geral
                            </p>
                            <ul className="menu-list">
                                
                                <li>
                                    <Link to={"/dashboard"}>
                                        <span className="icon is-small">
                                            <i className="fas fa-home" aria-hidden="true"></i>
                                        </span>
                                        <span> Área exclusiva</span>
                                    </Link>
                                </li>

                                <li>
                                <Link to={"/dashboard"}>Meus Empréstimos</Link>
                                <ul>
                                    <li><Link to={"/dashboard/loansrequested"}>Solicitados</Link></li>
                                    <li><Link to={"/dashboard/investments"}>Investimentos</Link></li>
                                    <li><Link to={"/dashboard/approved"}>Aprovados</Link></li>
                                    {/* <li><a>Add a member</a></li> */}
                                </ul>
                                </li>
                                
                                
                            </ul>
                            <p className="menu-label">
                                Transações
                            </p>
                            <ul className="menu-list">
                                {/* <li><a>Team Settings</a></li> */}
                                <li>
                                <Link to={"/dashboard/loan-request"} className="is-active">Empréstimo</Link>
                                <ul>
                                    <li><Link to={"/dashboard/loan-request"}>Quero Empréstimo</Link></li>
                                    <li><Link to={"/dashboard/loans"}>Quero Investir</Link></li>
                                    {/* <li><a>Add a member</a></li> */}
                                </ul>
                                </li>
                                {/* <li><a>Invitations</a></li> */}
                                
                            </ul>
                            
                            <ul className="menu-list">
                                <li><Link to={"/dashboard/payment"}>Pagamentos</Link></li>
                                <li><Link to={"/dashboard/statements"}>Extrato</Link></li>
                                <li><Link to={"/dashboard"}>Saldo</Link></li>
                            </ul>
                        </aside>
                        
                    </div>
                    {/* --------------------- menu ---------------------  */}

                    <div className="media-content">
                        <div className='container'>
                        {/* <Switch> */}
                            <Route exact path='/dashboard' component={Restricted}/> 
                            <Route exact path='/dashboard/loans' component={Loans}/>  
                            <Route exact path='/dashboard/loans/:id' component={Loan}/>
                            <Route exact path='/dashboard/loan-request' component={CreateInvestments}/> 
                            <Route exact path='/dashboard/confirmation-loan' component={ConfirmationLoan}/> 
                            <Route exact path='/dashboard/confirmationloanmessage' component={ConfirmationLoanMessage}/>
                            <Route exact path='/dashboard/loansrequested' component={LoansRequested}/>    
                            <Route exact path='/dashboard/investments' component={Investments}/>
                            <Route exact path='/dashboard/investment/:id' component={Investment}/>
                            <Route exact path='/dashboard/approved' component={Approved}/>   
                            <Route exact path='/dashboard/statements' component={BankStatement}/> 
                            <Route exact path='/dashboard/payment' component={Payment}/> 
                            <Route exact path='/dashboard/payment/:id' component={PaymentInstallment}/> 
                            <Route exact path='/dashboard/loansrequested/:id' component={LoanRequested}/>                   
                        {/* </Switch> */}
                        </div>
                    </div>
                </Router>
                </div>
            </div>
            </DashBoardContext.Provider>
                )
            }
        
            </AppContext.Consumer>
    );
  }
}

Dashboard.contextType = AppContext;
export default Dashboard;