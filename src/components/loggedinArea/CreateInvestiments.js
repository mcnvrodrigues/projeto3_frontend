import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateInvestiments extends Component{
  render(){
    return(
      <React.Fragment>
          <div class="container">
            <div class="box">
              <div class="field">
                <label class="label">Valor do Emprestimo</label>
                <div class="control">
                  <input class="input" type="number" placeholder="R$ 100,00"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Quantidade de parcelas</label>
                <div class="control">
                  <select class="input" name="country">
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
              <div class="field">
                <label class="label">Taxa de Juros</label>
                <div class="control">
                  <input class="input" type="number" placeholder="0.10"/>
                </div>
              </div>  
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Salvar</button>
                </div>
                <div class="control">
                  <Link to='/Investiments'><button class="button is-link is-light">Cancelar</button></Link>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default CreateInvestiments;