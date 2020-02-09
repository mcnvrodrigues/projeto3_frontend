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

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

}

export default AuthService;