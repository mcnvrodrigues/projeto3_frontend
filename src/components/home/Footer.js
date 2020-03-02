import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <footer className="footer has-background-dark">
          <div className="content has-text-centered">
            <p>
              <strong className='has-text-white'>Coommoney</strong>
              <span className='has-text-white'> por </span>
              <a href="https://github.com/mcnvrodrigues"> Marciano Rodrigues </a> 
              <span className='has-text-white'> e </span> 
              <a href="https://github.com/Jeferson1"> Jeferson Silva </a>. 
              <span className='has-text-white'>Codigo disponibilizado em </span>
              <a href="https://github.com">Github.com</a>.
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer