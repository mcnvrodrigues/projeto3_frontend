import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CreateInvestiments extends Component{
  render(){
    return(
      <React.Fragment>
          <div className="container">
            <div className="box">
              <div className="field">
                <label className="label">Valor do Emprestimo</label>
                <div className="control">
                  <input className="input" type="number" placeholder="R$ 100,00"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Quantidade de parcelas</label>
                <div className="control">
                  <select className="input" name="country">
                    <option value="1">x1</option>
                    <option value="2">x2</option>
                    <option value="3">x3</option>
                    <option value="4">x4</option>
                    <option value="5">x5</option>
                    <option value="6">x6</option>
                    <option value="7">x7</option>
                    <option value="8">x8</option>
                    <option value="9">x9</option>
                    <option value="10">x10</option>
                    <option value="11">x11</option>
                    <option value="12">x12</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label className="label">Taxa de Juros</label>
                <div className="control">
                  <input className="input" type="number" placeholder="0.10"/>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Salvar</button>
                </div>
                <div className="control">
                  <Link to='/Investiments'><button className="button is-link is-light">Cancelar</button></Link>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}
export default CreateInvestiments;