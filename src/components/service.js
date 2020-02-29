// auth/auth-service.js

import axios from 'axios';


class Service {
  constructor() {
    let service = axios.create({
    //   baseURL: process.env.REACT_APP_API,
      baseURL: 'http://localhost:5000/',
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

}

export default Service;