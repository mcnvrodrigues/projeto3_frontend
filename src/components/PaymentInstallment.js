import React, { Component } from 'react';
import Service from './service';
import { Link, Redirect } from 'react-router-dom';
class PaymentInstallment extends Component {

    constructor(props){
        super(props);

        this.state = { 
          install: null
        };

        this.service = new Service();
    }

    componentDidMount(){
        
        this.service.installment(this.props.match.params.id)
        .then(response => {
          this.setState({
            install: response
          })
          console.log('Parcelas  >>', response.install);
        })
        .catch(err => {
          console.log(err);
        })
    }

    render() {
        return (
            <div className="container backg">

                

                    {(this.state.install ?

                        this.state.install.install.map((parcela, i) => {
                            return <Link to={`/dashboard/payment/installment/${parcela._id}`} key={i} >
                                <div className="box payment">
                                    <form>
                                        
                                        <div className='level'>
                                            <label className="label">Parcela</label>
                                            <p>{parcela.installmentNumber}/ {parcela.installments}</p>
                                        </div>                           

                                        <div className='level'>
                                            <h6 className="subtitle  is-6">Valor</h6>
                                            <p>{parcela.installmentAmount}</p>
                                        </div>

                                        <div className='level'>
                                            <h6 className="subtitle  is-6">Vencimento</h6>
                                            <p>{parcela.date}</p>
                                        </div>

                                        <div className='level'>
                                            <h6 className="subtitle  is-6">Status</h6>
                                            <p>{parcela.status}</p>
                                        </div>
                                        
                                            
                                    </form>
                                </div>

                                <hr></hr>

                            </Link>
                        })

                        
                    :
                        <p>Carregando</p>
                    )}
                
                    
                            
                
            </div>
        );
    }
}

export default PaymentInstallment;