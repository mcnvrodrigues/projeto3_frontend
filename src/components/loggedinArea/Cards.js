import React, { Component } from 'react';

class Cards extends Component{
  render(){
    return(
      <React.Fragment>
      <br/>
        <div className="container">
            <div className="level-item is-gapless">
                <div className="card card-width">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                        </figure>
                      </div>
                      <div className="media-content user-name">
                        <label className="title is-4">John Smith</label>
                        <br/>
                        <br/>
                        <label className="title is-6">São Paulo</label>
                      </div>
                      <div className="control accept-button">
                        <button className="button is-link">Aceitar</button>
                      </div>
                    </div>
                    <div className='investiments-content'>
                      <div className='value'>
                        <p className='Title 3'>Solicitado</p>
                        <p className='Title 3'>R$ 1.000,00</p>
                      </div>
                      <div className='quotes'>
                        <p className='Title 3'>Parcelas</p>
                        <p className='Title 3'>x12</p>
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