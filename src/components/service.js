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

  education = (degree) => {
    return this.service.post('/education', {degree})
    .then(response => response.data);
  }

}

export default Service;