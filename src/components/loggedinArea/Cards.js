import React, { Component } from 'react';

class Cards extends Component{
  render(){
    return(
      <React.Fragment>
      <br/>
        <div class="container">
          <div class="level">
            <div class="level-item is-gapless">
              <div class='box'>
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-5by4">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <label class="title is-4">John Smith</label>
                        <br/>
                        <br/>
                        <label class='Title 3'>R$ 1.000,00</label>
                        <br/>
                        <label class='Title 3'>x12 Parcelas</label>
                        <br/>
                        <label class='Title 3'>Juros 0.04</label>
                        <br/>
                      </div>
                    </div>
                    <div class="control">
                      <button class="button is-link">Aceitar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;