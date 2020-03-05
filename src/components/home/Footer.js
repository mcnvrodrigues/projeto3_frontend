import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <footer className="footer is-light">
          <div className="content has-text-centered">
            <p>
              <strong className='has-text-grey-dark'>Coommoney</strong>
              <span className='has-text-grey-dark'> por </span>
              <a href="https://github.com/mcnvrodrigues"> Marciano Rodrigues </a> 
              <span className='has-text-grey-dark'> e </span> 
              <a href="https://github.com/Jeferson1"> Jeferson Silva </a>. 
              <span className='has-text-grey-dark'>Projeto disponibilizado em </span>
              <a href="https://github.com">Github.com</a>.
            </p>
            <p className='is-size-2'>Acompanhe a Coommoney na mídia</p>
            <div class='partiners'>
              <img className='folha' src='https://mutual.club/assets/images/logo_folhasp.png'/>
              <img className='monitor' src='https://mutual.club/assets/images/logo_monitor.png'/>
              <img className='estadao' src='https://mutual.club/assets/images/logo_estadao.png'/>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer