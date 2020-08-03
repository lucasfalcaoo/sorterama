import { fetchSignIn, fetchNewPassword } from './services';
import { setToken, handleLoading } from './actions';
import { setDraw, setUser } from '../../Main/store/actions';
import { setMessage } from '../../../components/Dialog/store/actions';
import { setAxiosToken } from '../../../services';

export const requestSignIn = params => dispatch => {
  dispatch(handleLoading(true));

  return fetchSignIn(params)
    .then(data => {
      const { token, sorteio, usuario } = data;

      setAxiosToken(token);
      dispatch(setToken(token));
      dispatch(setUser(usuario));
      dispatch(setDraw(sorteio));
    })
    .finally(() => dispatch(handleLoading(false)));
};

export const requestNewPassword = params => dispatch => {
  dispatch(handleLoading(true));

  return fetchNewPassword(params)
    .then(data =>
      dispatch(setMessage({ title: 'Novo PIN enviado', message: data }))
    )
    .finally(() => dispatch(handleLoading(false)));
};
