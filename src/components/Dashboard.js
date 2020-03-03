import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Restricted from './Restricted';
import CreateInvestiments from './CreateInvestiments';
import Loans from './Loans'

 class Dashboard extends Component {
  render() {
    return (
        
           <div className="card-content">
                <div className="media">
                <Router>
                    {/* --------------------- menu ---------------------  */}
                    <div className="media-left">
                        
                        <aside className="menu">
                            <p className="menu-label">
                                Geral
                            </p>
                            <ul className="menu-list">
                                
                                <li>
                                    <Link to={"/dashboard"}>
                                        <span className="icon is-small">
                                            <i className="fas fa-home" aria-hidden="true"></i>
                                        </span>
                                        <span> Área exclusiva</span>
                                    </Link>
                                </li>

                                <li>
                                <Link to={"/dashboard"}>Meus Empréstimos</Link>
                                <ul>
                                    <li><Link to={"/dashboard"}>Solicitados</Link></li>
                                    <li><Link to={"/dashboard"}>Investimentos</Link></li>
                                    <li><Link to={"/dashboard"}>Aprovados</Link></li>
                                    {/* <li><a>Add a member</a></li> */}
                                </ul>
                                </li>
                                
                                
                            </ul>
                            <p className="menu-label">
                                Transações
                            </p>
                            <ul className="menu-list">
                                {/* <li><a>Team Settings</a></li> */}
                                <li>
                                <Link to={"/dashboard/loan-request"} className="is-active">Empréstimo</Link>
                                <ul>
                                    <li><Link to={"/dashboard/loan-request"}>Quero Empréstimo</Link></li>
                                    <li><Link to={"/dashboard/loans"}>Quero Investir</Link></li>
                                    {/* <li><a>Add a member</a></li> */}
                                </ul>
                                </li>
                                {/* <li><a>Invitations</a></li> */}
                                
                            </ul>
                            
                            <ul className="menu-list">
                                <li><Link to={"/dashboard"}>Pagamentos</Link></li>
                                <li><Link to={"/dashboard"}>Extrato</Link></li>
                                <li><Link to={"/dashboard"}>Saldo</Link></li>
                            </ul>
                        </aside>
                        
                    </div>
                    {/* --------------------- menu ---------------------  */}

                    <div className="media-content">
                        <div className='container'>
                        {/* <Switch> */}
                            <Route exact path='/dashboard' component={Restricted}/> 
                            <Route exact path='/dashboard/loans' component={Loans}/>  
                            <Route exact path='/dashboard/loan-request' component={CreateInvestiments}/>                         
                        {/* </Switch> */}
                        </div>
                    </div>
                </Router>
                </div>
            </div>
       
    );
  }
}

export default Dashboard;