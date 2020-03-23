import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Service from './service';
import InputMask from 'react-input-mask';

class CreditCard extends Component {

    constructor(props){
        super(props);

        this.state = { 
          installment: null,
          number: '',
          validade: '',
          expirationMonth: '12',
          expirationYear: '2020',
          bank: 'PAGAR-ME',
          owner: '',
          cvv: '',
          bandeira: '/favicon.ico',
          bgColor: '#8DB6CD',
          color: 'white',        
          redirect: false
        };

        this.service = new Service();
    }

    renderRedirect = () => {
    
        if (this.state.redirect) {
          
          return <Redirect to='/dashboard/confirmationloanmessagecreditcard'/>
        }
      }

    componentDidMount(){        
        
        this.service.singleInstallment(this.props.match.params.id)
        .then(response => {
          this.setState({
            installment: response            
          })
          console.log('Single installment >>', response);
        })
        .catch(err => {
          console.log(err);
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();   
        const id = this.state.installment.install._id;
        const amount = this.state.installment.install.installmentAmount;
        const card_number = this.state.number;
        const card_holder_name = this.state.owner;
        
        const card_cvv = this.state.cvv;
        const cardExpiration = this.state.validade.substr(0,2) + this.state.validade.substr(5,6);
        
        this.service.paymentConfirmation(id, amount, card_number, card_holder_name, cardExpiration, card_cvv)
        .then(response => {
            console.log(response);            
        })
            .catch(error => console.log(error))

        this.setState({
          redirect: true
        })        
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            expirationMonth: this.state.validade.substr(0,2),
            expirationYear: this.state.validade.substr(3,6),
        });
        this.bandeira();

        
      }

    cardInfo(){
        return 'Expires ' + this.state.expirationMonth 
                + '/' + this.state.expirationYear.toString().substr(-2,2);
    }

    bandeira = () => {

            if (Number(this.state.number.substr(0,1)) == 4){
                this.setState({
                    bandeira: '/images/visa.png',
                    bgColor: '#11aa99',
                    color: 'white'                    
                })
            }else if(Number(this.state.number.substr(0,1)) == 5){
                this.setState({
                    bandeira: '/images/master-card.svg',
                    bgColor: '#eeeeee',
                    color: '#222222'
                })
            }else if(Number(this.state.number.substr(0,1)) == 3){
                this.setState({
                    bandeira: '/images/american.jpg',
                    bgColor: '#ddbb55',
                    color: 'white'
                })
            }else if(Number(this.state.number.substr(0,1)) == 6){
                this.setState({
                    bandeira: '/images/hiper.jpg',
                    bgColor: '#EE82EE',
                    color: 'white'
                })
            }else{
                this.setState({
                    bandeira: '/favicon.ico',
                    bgColor: '#8DB6CD',
                    color: 'white'
                })
            }
        
        
    }
    

    render() {
        return (
            <AppContext.Consumer>
            {
                context => (
                    <div className="container">
                        {this.renderRedirect()}

                        <div className="level">
                               

                                            
                        <div className="level-item">

                            {(this.state.installment ?

                                
                                <form onSubmit={this.handleFormSubmit}>

                                    <div className="columns">
                                    <div className="column is-four-fifths"><div><h4 className='subtitle is-4'>Cartão de Crédito</h4></div></div>
                                    <div className="column"></div>
                                    <div className="column"><i className="far fa-credit-card" aria-hidden="true"></i> </div>
                                    
                                    </div>

                                    <div class="columns">
                                    <div class="column is-full">


                                            <div style={{backgroundColor:this.state.bgColor}} className="credit-card">
                                            <div className="logo-c">
                                                <figure className="image is-48x48">
                                                <img src = {this.state.bandeira} alt='bandeira'/>
                                                </figure>    
                                            </div>           
                                            <div className="card-number">
                                                <span style={{color:this.state.color}} className="title is-2">{'**** **** **** ' + this.state.number.toString().substr(-4, 4)}</span>
                                            </div>   
                                            <div className="card-info">
                                                <span style={{color:this.state.color}} className="title is-5">{this.cardInfo(this.props)}</span>
                                                <span style={{color:this.state.color}} className="title is-5">{this.state.bank}</span>
                                            </div>
                                            <div className="owner">
                                                <span style={{color:this.state.color}} className="title is-5">{this.state.owner}</span>            
                                            </div>  
                                        </div>

                                    </div>
                                   
                                    </div>


                                    <div className="field">

                                        <label className="label">Nome do Titular</label>

                                        <div className="control has-icons-left">
                                        <input   className="input" type="text"  name="owner" value={this.state.owner} onChange={ e => this.handleChange(e)}/>

                                        <span className="icon is-small is-left">
                                            <i className="fas fa-id-card"></i>
                                            </span>
                                        </div>

                                    </div>

                                    <div className="field">

                                        <label className="label">Número</label>

                                        <div className="control has-icons-left">

                                        <InputMask mask="9999 9999 9999 9999" className="input" type="text"  name="number" value={this.state.number} onChange={ e => this.handleChange(e)}/>
                                        
                                            <span className="icon is-small is-left">
                                            <i className="fas fa-sort-numeric-up-alt"></i>
                                            </span>
                                            
                                        </div>

                                       
                                    </div>

                                    <div className="field">

                                        <label className="label">Validade (MM/AAAA)</label>

                                        <div className="control has-icons-left">

                                        <InputMask mask="99/2099" className="input" type="text"  name="validade" value={this.state.validade} onChange={ e => this.handleChange(e)}/>

                                            <span className="icon is-small is-left">
                                            <i className="fas fa-sort-numeric-up-alt"></i>
                                            </span>
                                            
                                        </div>


                                    </div>


                                    <div className="field">

                                        <label className="label">CVV </label>

                                        <div className="control has-icons-left">

                                        <InputMask mask="999" className="input" type="text"  name="cvv" value={this.state.cvv} onChange={ e => this.handleChange(e)}/>

                                            <span className="icon is-small is-left">
                                            <i className="fas fa-sort-numeric-up-alt"></i>
                                            </span>
                                            
                                        </div>


                                    </div>

                                    <div className='level'>
                                        <label className="label">Parcela</label>
                                        <p>{this.state.installment.install.installmentNumber}</p>
                                    </div>
                                    
                                    <div className='level'>
                                        <label className="label">Valor</label>
                                        <p>R$ {this.state.installment.install.installmentAmount}</p>
                                    </div>

                                    
                                        <div className="control">
                                            {/* <Link to='/dashboard/confirmation-loan'><button className="button is-link">Salvar</button></Link> */}
                                            <button type='submit' className="button is-link is-fullwidth">Confirmar Pagamento</button>
                                        </div>
                                        
                                     
                                        
                                </form>
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

CreditCard.contextType = AppContext;
export default CreditCard;