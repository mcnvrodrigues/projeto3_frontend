// auth/auth-service.js

import axios from 'axios';


class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API,
      withCredentials: true
    });
    console.log('env. ', process.env.REACT_APP_API);
    this.service = service;
  }

  signup = (cpf, email, celular, nome) => {
    return this.service.post('/signup', {cpf, email, celular, nome})
    .then(response => response.data);
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data);
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data);
  }

  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

  confirmation = (confirmationToken) => {
    
    return this.service.post('/auth/', {confirmationToken})
    .then(response => response.data);
  }

  createpsw = (email, psswd, confpsswd) => {
    return this.service.post('/password', {email, psswd, confpsswd})
    .then(response => response.data);
  }

}

export default AuthService;