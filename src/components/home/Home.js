import React, { Component } from "react";
class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <div className='background'>
          <h1 className='home-title'>Commoney</h1>
          <p className='home-text'>Investindo em pessoas.</p>
        </div>
        <div className='level container'>
          <div className='has-text-left column'>
            <div className='column is-two-fifths'></div>
              <br></br>
              <h1 className='title is-2 has-text-success'>Propomos uma revolução feita por tecnologia e, acima de tudo, por pessoas</h1>
              <br></br>
              <h3 className='subtitle is-3'>O nosso foco é você</h3>
              <p>Queremos resolver definitivamente o acesso ao crédito e também dar retorno justo à quem investe. 
              Entendemos as necessidades de nossos usuário para entregar a melhor experiência.</p>
              <br/>
              <h3 className='subtitle is-3'>Tecnologia a seu favor</h3>
              <p>Usamos tecnologia própria para fazer a análise e originação de crédito mais rápida do Brasil, 
              em poucos minutos, tudo está resolvido.</p>
              <br/>
              <h3 className='subtitle is-3'>Segurança</h3>
              <p>A Commoney é uma instituição autorizada e regulada pelo Banco Central do Brasil (Bacen), 
              
              atuando como correspondente bancário.</p>
          </div>
          <div className='has-text-centered column is-two-fifths has-background-link info-box'>
            <h3 className='subtitle is-3 has-text-white'>+ 500.000 usuários</h3>
            <p className='has-text-white	'>Optaram por fazer um empréstimo ou investimento rápido, seguro e sem burocracia.</p>
            
            <h3 className='subtitle is-3 has-text-white'>+ 7.000 empréstimos</h3>
            <p className='has-text-white'>Viabilizamos o acesso ao crédito, oferecendo taxas acessíveis.</p>

            <h3 className='subtitle is-3 has-text-white'>+ 10 milhões investidos</h3>
            <p className='has-text-white'>Investindo com a Commoney, você ajuda quem precisa e ainda tem retornos acima do mercado.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home