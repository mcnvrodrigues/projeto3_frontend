import React, { Component } from 'react';
import Service from './service';

class Investment extends Component {

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

                <h3 className="title is-3" style={{'color': 'white'}}>Investimento</h3>         

                                    
                <div className="box">

                    {(this.state.loanreq ?
                        <form>
                            
                            <div className='level'>
                                <label className="label">Valor do Emprestimo</label>
                                <p>R$ {this.state.loanreq.loans.amount}</p>
                            </div>

                            <div className='level'>
                                <span className="tag is-info is-light">+ Juros</span>
                                <p>{this.state.loanreq.loans.rate}% a.m.</p>
                            </div>

                            <div className='level'>
                                <span className="tag is-info is-light">+ IOF</span>
                                <p>R$ {this.state.loanreq.loans.iof}</p>
                            </div>                        

                            <div className='level'>
                                <span className="tag is-info is-light">+ CET</span>
                                <p>{this.state.loanreq.loans.cet}% a.m.</p>
                            </div>

                            <div className='level'>
                                <h6 className="subtitle  is-6">Parcelas</h6>
                                <p>{this.state.loanreq.loans.installments}x de R$ {this.state.loanreq.loans.installmentAmount}</p>
                            </div>

                            <div className='level'>
                                <h6 className="subtitle  is-6">Vencimento</h6>
                                <p>dia {this.state.loanreq.loans.dueDate} de cada mês</p>
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

export default Investment;