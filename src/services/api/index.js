import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'X-Custom-Header': 'foobar'}
  });

export default instance;