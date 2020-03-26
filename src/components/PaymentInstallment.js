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

    formatDate = (date) => {
        let dia = date.substr(8,2);
        let mes = date.substr(5,2);
        let ano = date.substr(0,4);       
    
        return `${dia}/${mes}/${ano}`;
      }

    render() {
        return (
            <div className="container backg">

                <p className='title is-4' style={{'color':'#060A4E'}}>Pagamentos</p>

                    {(this.state.install ?

                        this.state.install.install.map((parcela, i) => {
                            return  <div>
                            <div className="box payment">
                                    <form>
                                        
                                        <div className='level'>
                                            <label className="title is-3">Parcela</label>
                                            <p className="title is-3">{parcela.installmentNumber}/ {parcela.installments}</p>
                                        </div>                           

                                        <div className='level'>
                                            <h6 className="title is-3">Valor</h6>
                                            <p className="title is-3" style={{'color':'orange'}}>R$ {parcela.installmentAmount}</p>
                                        </div>

                                        <div className='level'>
                                            <h6 className="title is-3">Vencimento</h6>
                                            <p className="subtitle is-4">{this.formatDate(parcela.date)}</p>
                                        </div>

                                        
                                            {(parcela.status == 'Paid'? 
                                                <div className='level'>
                                                <h6 className="title is-3">Status</h6>
                                                <p className="title is-3" style={{'color':'green'}}>Paga</p>
                                                </div>
                                            :
                                            <div className="control">
                                            <Link to={`/dashboard/payment/installment/${parcela._id}`} key={i} >
                                                <button type='submit' className="button is-link is-fullwidth">Pagar</button>
                                                </Link>
                                            </div>
                                            )}
                                            
                                        
                                        
                                            
                                    </form>
                                </div>

                                <hr></hr>
                            </div>
                            
                        })

                        
                    :
                        <p>Carregando</p>
                    )}
                
                    
                            
                
            </div>
        );
    }
}

export default PaymentInstallment;