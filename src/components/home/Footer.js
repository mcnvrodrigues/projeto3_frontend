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
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21955.962853684083!2d-46.66231942658338!3d-23.56017548991528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x694f27fed85d9b0c!2sIronhack%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1574213229841!5m2!1spt-BR!2sbr">
              </iframe>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer