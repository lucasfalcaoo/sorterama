import { api } from '../../../services';

export const fetchSignIn = params => {
  return api
    .post('/api/login/autenticar', params)
    .then(response => response.data);
};

export const fetchNewPassword = params => {
  const { username } = params;

  return api
    .get(`/api/login/reenvio-senha/${username}`)
    .then(response => response.data);
};
