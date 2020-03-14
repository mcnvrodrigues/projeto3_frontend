import React, { Component } from 'react';

class ConfirmationLoanMessage extends Component {
  render() {
    return (
        <div className='container'> 
            <div className='box confloanmessage has-background-primary'>
                <h3 className='subtitle is-3'>Pedido publicado</h3>
                <p>Milhares de pessoas irão avaliar as condições</p>
                <p>definidas por você e uma delas estará</p>
                <p>pronta para te ajudar!</p>
            </div> 
        </div>
    );
  }
}

export default ConfirmationLoanMessage;