import axios from 'axios';
import {  useSelector } from "react-redux";

export const API = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'X-Custom-Header': 'foobar'}
  });

export const APISetToken = (newToken) => {
  
  const newAuthorizationHeader = newToken ? `Bearer ${newToken}` : "";

  API.interceptors.request.use(function (config) {                        
      config.headers.Authorization = newAuthorizationHeader;
      return config;
  });  
}

export default API;