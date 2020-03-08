// auth/auth-service.js

import axios from 'axios';


class Service {
  constructor() {
    let service = axios.create({
    //   baseURL: process.env.REACT_APP_API,
      baseURL: process.env.REACT_APP_GENERAL,
      withCredentials: true
    });
    
    this.service = service;
  }

  education = (confirmationCode, degree) => {
    return this.service.post('/education', {confirmationCode, degree})
    .then(response => response.data);
  }

  dependents = (confirmationCode, dependents) => {
    return this.service.post('/dependents', {confirmationCode, dependents})
    .then(response => response.data);
  }

  loanRequest = (amount, installments, dueDate, rate, iof, cet, installmentAmount, total, type, cpf, id, name, quotas) => {
    return this.service.post('/loanrequest', {amount, installments, dueDate, rate, iof, cet, installmentAmount, total, type, cpf, id, name, quotas})
    .then(response => response.data);
  }

  myloans = (id) => {
    return this.service.post('/requestedloans', {id})
    .then(response => response.data);
  }

  myInvestments = (id) => {
    return this.service.post('/myinvestments', {id})
    .then(response => response.data);
  }

  loansApproved = (id) => {
    return this.service.post('/loansapproved', {id})
    .then(response => response.data);
  }

  singleLoan = (id) => {
    return this.service.post('/singleRequestedloan', {id})
    .then(response => response.data);
  }

  availableLoans = (id) => {
    return this.service.post('/availableloans', {id})
    .then(response => response.data);
  }

  provideLoan = (id, provider) => {
    return this.service.post('/provideloan', {id, provider})
    .then(response => response.data);
  }

}

export default Service;