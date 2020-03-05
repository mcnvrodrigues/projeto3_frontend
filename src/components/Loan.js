import React, { Component } from 'react';
import Service from './service';

class Loan extends Component {

    constructor(props){
        super(props);

        this.state = { 
          loanreq: null
        };

        this.service = new Service();
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

    render() {
        return (
            <div className="container backg">

                <h3 className="title is-3" style={{'color': 'white'}}>Emprestimo</h3>         

                                    
                <div className="box">

                    {(this.state.loanreq ?
                        <form>

                            <div className='level'>
                                <label className="label">Nome</label>
                                <p>{this.state.loanreq.loans.claimantName}</p>
                            </div>
                            
                            <div className='level'>
                                <label className="label">Valor do Emprestimo</label>
                                <p>R$ {this.state.loanreq.loans.amount}</p>
                            </div>      
                                
                        </form>
                    :
                        <p>Carregando</p>
                    )}
                
                    
                            
                </div>
            </div>
        );
    }
}

export default Loan;