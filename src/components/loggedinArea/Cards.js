import React, { Component } from 'react';

class Cards extends Component{
  render(){
    return(
      <React.Fragment>
      <br/>
        <div class="container">
            <div class="level-item is-gapless">
              {/* <div class='box'> */}
                <div class="card card-width">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-64x64">
                          <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div class="media-content user-name">
                        <label class="title is-4">John Smith</label>
                        <br/>
                        <br/>
                        <label class="title is-6">São Paulo</label>
                      </div>
                      <div class="control accept-button">
                        <button class="button is-link">Aceitar</button>
                      </div>
                    </div>
                    <div className='investiments-content'>
                      <div className='value'>
                        <p class='Title 3'>Solicitado</p>
                        <p class='Title 3'>R$ 1.000,00</p>
                      </div>
                      <div className='quotes'>
                        <p class='Title 3'>Parcelas</p>
                        <p class='Title 3'>x12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Cards;