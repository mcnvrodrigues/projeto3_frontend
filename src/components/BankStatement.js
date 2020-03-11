import React, { Component } from 'react';
import AppContext from '../context/AppContext';
import Service from './service';
import { Link, Redirect } from 'react-router-dom';


class BankStatement extends Component {

  constructor(props){
    super(props);
    this.state = { 
      operations: null,
      redirect: false
    };
    this.service = new Service();
  }

  componentDidMount(){
    this.service.statements(this.context.state.loggedInUser._id)
    .then(response => {
      this.setState({
        operations: response        
      });      
      console.log('bank statements >>>', response);
    })
    .catch(err => {
      console.log(err);
    })
  }


  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="container">          

                        {(this.state.operations ? 
                        
                            this.state.operations.trans.map((statem, i) => {
                            return <Link to={`/dashboard/statements/${statem._id}`} key={i} > 
                                <div className="level">
                                    <div className="level-item">
                                        <div className="box">                      
                                        
                                        <h5 className="title is-5"><i className="far fa-calendar-alt"></i> {statem.createdAt}</h5>
                                        <span className="tag is-light">{statem.code}</span>
                                        <button class="button is-info">{statem.amount}</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            })
                        
                        :
                            <p>Carregando</p>
                        )}
          </div>

        )}
        

        </AppContext.Consumer>
    );
  }
}

BankStatement.contextType = AppContext;
export default BankStatement;