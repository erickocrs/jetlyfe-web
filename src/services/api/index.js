import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'X-Custom-Header': 'foobar'}
  });

export const APISetToken = (newToken) => {
  
  if(newToken){
    const newAuthorizationHeader = `Bearer ${newToken}`;
    console.log("newToken", newToken)
    console.log("newAuthorizationHeader", newAuthorizationHeader)
    
    API.interceptors.request.use(function (config) {                        
        config.headers.Authorization = newAuthorizationHeader;
        return config;
    });  
  }
}

export default API;