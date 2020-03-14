import React, { Component } from 'react';
import Service from './service';
import AppContext from '../context/AppContext';
import Cards from './loggedinArea/Cards';
import { Link, Redirect } from 'react-router-dom';
import AvailableLoan from './AvailableLoan';

class Payment extends Component {
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
      console.log('Payment >>> ', response);
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
           
            <p className='title is-4' style={{'color':'#060A4E'}}>Pagamentos</p>

            <div className="loan-container">                
                
                <div className="cards-container">

                {(this.state.loansreq ? 
                  
                  this.state.loansreq.loans.map((loan, i) => {
                    return <Link to={`/dashboard/payment/${loan._id}`} key={i} >                       
                        <AvailableLoan loanp={loan} user={context.state.loggedInUser} />
                        
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

Payment.contextType = AppContext;
export default Payment;