import axios from 'axios';

let server = axios.create({
  baseURL: '/api/'
});

export default server;
