import React, { Component } from 'react';
import AvailableLoan from './AvailableLoan';
import Cards from './loggedinArea/Cards';

class Loan extends Component {
  render() {
    return (

        <div className="container">
           

            <div className="loan-container">                
                
                <div className="cards-container">

                    <AvailableLoan info={{name:'Marciano Vilela', email:'@mcnvrodrigues', loan: 500, installments: 12, rate:'0,6'}}/>
                    <AvailableLoan info={{name:'Rodrigo Santos', email:'@rodrigoss', loan: 1300, installments: 12, rate:'0,3'}}/>
                    <AvailableLoan info={{name:'Cecilia Vilani', email:'@vilaniceci', loan: 600, installments: 18, rate:'0,8'}}/>
                    <AvailableLoan info={{name:'Roberta Martins', email:'@robertamar', loan: 900, installments: 15, rate:'0,6'}}/>
                    <AvailableLoan info={{name:'Alan de Almeida', email:'@almeidaall', loan: 500, installments: 12, rate:'0,4'}}/>
                    <AvailableLoan info={{name:'Raissa Soares', email:'@ssraissa', loan: 700, installments: 10, rate:'0,6'}}/>
                    <AvailableLoan info={{name:'Romario Santos', email:'@romario9', loan: 800, installments: 16, rate:'0,6'}}/>
                    <AvailableLoan info={{name:'Jeferson Soares', email:'@soares33', loan: 2000, installments: 12, rate:'0,6'}}/>
                    

                    {/* <div className="level-item">   

                    </div> */}
            
                </div>
            </div>
        </div>
    );
  }
}

export default Loan;