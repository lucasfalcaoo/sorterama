import axios from 'axios';
// import { toast } from 'react-toastify';

const baseAPI = process.env.REACT_APP_BASE_API;

export const api = axios.create({
  baseURL: baseAPI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    clientSide: 'web',
  },
});

export const setAPI = () => {
  api.interceptors.response.use(null, error => {
    console.log('Axios - error status: ', error.response);

    if (error.response) {
      if (error.response.status === 500) {
        console.log(
          'Aconteceu algo inesperado. Entre em contato com o suporte.'
        );
      } else if (error.response.status === 400) {
        console.log(error.response.data.data.msg);
      } else {
        console.log('Estamos tendo problemas, tente novamente em breve.');
      }
    }

    return Promise.reject(error);
  });
};

export const setAxiosToken = token => {
  return (api.defaults.headers.common['Authorization'] = token);
};
