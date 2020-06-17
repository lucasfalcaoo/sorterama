import axios from 'axios';
import { toast } from 'react-toastify';

const baseAPI = process.env.REACT_APP_BASE_API;

export const api = axios.create({
  baseURL: baseAPI,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    clientSide: 'web',
  },
});

export const setAPI = () => {
  // Default configurations from axios
  api.interceptors.response.use(null, error => {
    console.log('Axios - error status: ', error.response);

    if (error.message) {
      const expireRequestTime = error.message.split(' ').includes('timeout');

      if (expireRequestTime) {
        toast.error(
          'Tempo limite de carregamento excedido. Repita a operação, por favor'
        );
      }
    }

    if (error.response) {
      if (error.response.status === 500) {
        toast.error(
          'Aconteceu algo inesperado. Entre em contato com o suporte.'
        );
      } else if (error.response.status === 400) {
        if (
          error.response.data.data.code === '17001' ||
          error.response.data.data.code === '19001'
        ) {
          return Promise.reject(error);
        }
        if (error.response.data.data.code === '01005') {
          window.location.href = '/?notauthorized=true';
        }
        toast.error(error.response.data.data.msg);
      } else if (error.response.status === 401) {
        window.location.href = '/?notauthorized=true';
      } else if (error.response.status === 404) {
        return true;
      } else {
        toast.error('Estamos tendo problemas, tente novamente em breve.');
      }
    }

    return Promise.reject(error);
  });
};

export const setBaseAPI = (userId, establishmentId) => {
  let BASE_URL = `${baseAPI}/${userId}`;

  if (establishmentId) {
    BASE_URL = `${baseAPI}/${userId}/establishment/${establishmentId}`;
  }

  return (api.defaults.baseURL = BASE_URL);
};

export const changeBaseAPI = (method, url, params) =>
  api({ method, url, baseURL: baseAPI, data: params }, params);

export const setToken = token => {
  return (api.defaults.headers.common['Authorization'] = token);
};
