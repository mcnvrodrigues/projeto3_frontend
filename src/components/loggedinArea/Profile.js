import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

class Profile extends Component{
  render(){
    return(
      <AppContext.Consumer>
        {
          context => (
          <div className="container">
            <div className="card profile">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-256x256">
                      <img src={context.state.loggedInUser.imgPath} alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <label className="title is-4">{context.state.loggedInUser.nome}</label>
                    <br/>
                    
                    <p>
                        <span className="title is-6">Email: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.email}</span>
                    </p>

                    <p>
                        <span className="title is-6">CPF: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.cpf}</span>
                    </p>

                    <p>
                        <span className="title is-6">Celular: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.celular}</span>
                    </p>

                    <p>
                        <span className="title is-6">Cidade: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.city}</span>
                    </p>

                    <p>
                        <span className="title is-6">Estado: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.state}</span>
                    </p>

                    <p>
                        <span className="title is-6">Educação: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.education}</span>
                    </p>

                    <p>
                        <span className="title is-6">Dependentes: </span>
                        <span className="subtitle is-6">{context.state.loggedInUser.dependents}</span>
                    </p>
                  </div>
                </div>
                
                  {/* botão para editar o perfil */}
                  <Link to='/dashboard' className="button is-link">Área Exclusiva</Link>
              </div>
            </div>
        </div>
       )
      }
      
    </AppContext.Consumer>
    );
  }
}

export default Profile;