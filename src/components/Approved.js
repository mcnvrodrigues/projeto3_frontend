import React, { Component } from 'react';
import Service from './service';
import AppContext from '../context/AppContext';
import Cards from './loggedinArea/Cards';
import { Link, Redirect } from 'react-router-dom';
import AvailableLoan from './AvailableLoan';
import DefaultMessage from './DefaultMessage';

class Approved extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loansreq: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.loansApproved(this.context.state.loggedInUser._id)
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
                <p className='title is-4' style={{'color':'#060A4E'}}>Aprovados</p>

            <div className="loan-container">                
                
                <div className="cards-container">

                {(this.state.loansreq ? 

                  (this.state.loansreq.loans.length !== 0 ?
                    this.state.loansreq.loans.map((loan, i) => {
                      return <Link to={`/dashboard/loansrequested/${loan._id}`} key={i} >                       
                          <Cards loanp={loan} user={context.state.loggedInUser} />
                          
                      </Link>
                    })
                  :
                    <DefaultMessage title = 'Nada para mostrar' message = 'As suas solicitaçöes de empréstimos ainda não foram aprovadas.'></DefaultMessage>
                  )                 
                  
                :
                  <progress className="progress is-small is-primary" max="100">15%</progress>
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

Approved.contextType = AppContext;
export default Approved;