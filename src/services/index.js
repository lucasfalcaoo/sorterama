import axios from 'axios';
import { store } from '../store';
import { setMessage } from '../components/Dialog/store/actions';

const baseAPI = process.env.REACT_APP_BASE_API;

export const api = axios.create({
  baseURL: baseAPI,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAPI = () => {
  api.interceptors.response.use(null, error => {
    if (error.response) {
      if (error.response.status === 500) {
        store.dispatch(
          setMessage({
            title: 'Problemas no servidor',
            message:
              'Estamos com problemas no servidor, tente novamente mais tarde',
            severity: 'error',
          })
        );
      } else if (error.response.status === 400) {
        store.dispatch(
          setMessage({
            title: 'Ops!',
            message: `${error.response.data}`,
            severity: 'error',
          })
        );
      } else {
        store.dispatch(
          setMessage({
            title: 'Problemas no servidor',
            message:
              'Estamos com problemas no servidor, caso o problema persista entre em contato com o suporte',
            severity: 'error',
          })
        );
      }
    }

    return Promise.reject(error);
  });
};

export const setAxiosToken = token => {
  return (api.defaults.headers.common['Authorization'] = token);
};
