import { api } from '../../../services';

export const fetchSignIn = params =>
  api('post', '/user/login', params).then(response => response.data);
