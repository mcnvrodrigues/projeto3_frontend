import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component{
  render(){
    return(
      <React.Fragment>
          <div class="container">
            <div class="card profile">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure className="image is-64x64">
                      <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <label class="title is-4">John Smith</label>
                    <br/>
                    <br/>
                    <label className="title is-6">São Paulo</label>
                  </div>
                </div>
                <div class="content">
                  <p>Nome</p>
                  <p>E-mail</p>
                  <p>Celular</p>
                  <p>Grau de Instrução</p>
                </div>
                  {/* botão para editar o perfil */}
                  <Link to='' class="button is-link">Editar</Link>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;