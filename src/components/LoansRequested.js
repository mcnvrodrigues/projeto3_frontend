import React, { Component } from 'react';
import Service from './service';
import AppContext from '../context/AppContext';
import Cards from './loggedinArea/Cards';
import { Link, Redirect } from 'react-router-dom';

class LoansRequested extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loansreq: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.myloans(this.context.state.loggedInUser._id)
    .then(response => {
      this.setState({
        loansreq: response
      })
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    })
  }



  render() {
    return (
      <AppContext.Consumer>
        {
          context => (
            <div className="container">
           

            <div className="loan-container">                
                
                <div className="cards-container">

                {(this.state.loansreq ? 
                  
                  this.state.loansreq.loans.map((loan, i) => {
                    return <Link to={`/dashboard/loansrequested/${loan._id}`} key={i} >                       
                        <Cards amount={loan.amount} installments={loan.installments} />
                        {console.log('emprestimos >> ', this.state.loansreq[0])}
                    </Link>
                  })
                  
                :
                  <p>Carregando</p>
                )}   
                
                
            
                </div>
            </div>
        </div>
          )
        }
        
      </AppContext.Consumer>
    );
  }
}

LoansRequested.contextType = AppContext;
export default LoansRequested;