import React, { Component } from 'react';
import Service from './service';
import AppContext from '../context/AppContext';
import Cards from './loggedinArea/Cards';
import { Link, Redirect } from 'react-router-dom';
import AvailableLoan from './AvailableLoan';

class Investments extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loansreq: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.myInvestments(this.context.state.loggedInUser._id)
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
                    return <Link to={`/dashboard/investment/${loan._id}`} key={i} >                       
                        <Cards loanp={loan} user={context.state.loggedInUser} />
                        
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

Investments.contextType = AppContext;
export default Investments;