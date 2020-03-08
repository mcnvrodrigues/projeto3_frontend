import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Service from './service';

class Loan extends Component {

    constructor(props){
        super(props);

        this.state = { 
          loanreq: null,
          redirect: false
        };

        this.service = new Service();
    }

    renderRedirect = () => {
    
        if (this.state.redirect) {
          
          return <Redirect to='/dashboard/confirmationloanmessage'/>
        }
      }

    componentDidMount(){        
        
        this.service.singleLoan(this.props.match.params.id)
        .then(response => {
          this.setState({
            loanreq: response
          })
          console.log('Single Loan >>', response.loans.amount);
        })
        .catch(err => {
          console.log(err);
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();   

        const loanId = this.state.loanreq.loans._id;
        const provider = this.context.state.loggedInUser._id;
        
        this.service.provideLoan(loanId, provider)
        .then(response => {
            console.log(response);            
        })
            .catch(error => console.log(error))

        this.setState({
          redirect: true
        })        
    }
    

    render() {
        return (
            <AppContext.Consumer>
            {
                context => (
                    <div className="container backg">
                        {this.renderRedirect()}

                        <h3 className="title is-3" style={{'color': 'white'}}>Emprestimo</h3>         

                                            
                        <div className="box">

                            {(this.state.loanreq ?
                                <form onSubmit={this.handleFormSubmit}>

                                    <div className='level'>
                                        <label className="label">Nome</label>
                                        <p>{this.state.loanreq.loans.claimantName}</p>
                                    </div>
                                    
                                    <div className='level'>
                                        <label className="label">Valor do Emprestimo</label>
                                        <p>R$ {this.state.loanreq.loans.amount}</p>
                                    </div>

                                    <div className="field is-grouped">
                                        <div className="control">
                                            {/* <Link to='/dashboard/confirmation-loan'><button className="button is-link">Salvar</button></Link> */}
                                            <button type='submit' className="button is-link">Confirmar</button>
                                        </div>
                                    </div>      
                                        
                                </form>
                            :
                                <p>Carregando</p>
                            )}
                        
                            
                                    
                        </div>
                    </div>
                )
            }
            
            </AppContext.Consumer>
        );
    }
}

Loan.contextType = AppContext;
export default Loan;