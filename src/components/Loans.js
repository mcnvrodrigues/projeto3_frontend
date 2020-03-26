import React, { Component } from 'react';
import AvailableLoan from './AvailableLoan';
import AppContext from '../context/AppContext';
import Service from './service';
import { Link, Redirect } from 'react-router-dom';
import Cards from './loggedinArea/Cards';
import DefaultMessage from './DefaultMessage';

class Loan extends Component {

  constructor(props){
    super(props);
    this.state = { 
      availableloans: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.availableLoans(this.context.state.loggedInUser._id)
    .then(response => {
      this.setState({
        availableloans: response
      })
      console.log('emprestimos disponiveis >>> ', response);
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="container">          

              <div className="loan-container">                
                  
                  <div className="cards-container">
{/* 
                      <AvailableLoan info={{name:'Marciano Vilela', email:'@mcnvrodrigues', loan: 500, installments: 12, rate:'0,6'}}/>
                      <AvailableLoan info={{name:'Rodrigo Santos', email:'@rodrigoss', loan: 1300, installments: 12, rate:'0,3'}}/>
                      <AvailableLoan info={{name:'Cecilia Vilani', email:'@vilaniceci', loan: 600, installments: 18, rate:'0,8'}}/>
                      <AvailableLoan info={{name:'Roberta Martins', email:'@robertamar', loan: 900, installments: 15, rate:'0,6'}}/>
                      <AvailableLoan info={{name:'Alan de Almeida', email:'@almeidaall', loan: 500, installments: 12, rate:'0,4'}}/>
                      <AvailableLoan info={{name:'Raissa Soares', email:'@ssraissa', loan: 700, installments: 10, rate:'0,6'}}/>
                      <AvailableLoan info={{name:'Romario Santos', email:'@romario9', loan: 800, installments: 16, rate:'0,6'}}/>
                      <AvailableLoan info={{name:'Jeferson Soares', email:'@soares33', loan: 2000, installments: 12, rate:'0,6'}}/> */}
                      

                      {/* <div className="level-item">   

                      </div> */}

                    {(this.state.availableloans ? 

                    (this.state.availableloans.loans.length !== 0 ?
                      this.state.availableloans.loans.map((loan, i) => {
                        return <Link to={`/dashboard/loans/${loan._id}`} key={i} >                       
                            {/* <AvailableLoan loanp={loan} user={context.state.loggedInUser} /> */}
                            <Cards loanp={loan} user={context.state.loggedInUser} />
                        </Link>
                      })
                    :
                    <DefaultMessage title = 'Nada para mostrar' message = 'Ainda não existem investimentos disponíveis.'></DefaultMessage>
                    )        
                      
                :
                  <progress className="progress is-small is-primary" max="100">15%</progress>
                )}
              
                  </div>
              </div>
          </div>

        )}
        

        </AppContext.Consumer>
    );
  }
}

Loan.contextType = AppContext;
export default Loan;