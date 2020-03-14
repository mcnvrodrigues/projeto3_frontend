import React, { Component } from 'react';

class ConfirmationLoanMessageApproved extends Component {
  render() {
    return (
        <div className='container'> 
            <div className='box confloanmessage has-background-primary'>
                <h3 className='subtitle is-3'>Pedido Aprovado</h3>
                <p>Agora é só esperar</p>
                <p>Continue acompanhando outras opções de investimentos</p>
                <p>E escolha a que melhor se encaixa para você</p>
            </div> 
        </div>
    );
  }
}

export default ConfirmationLoanMessageApproved;