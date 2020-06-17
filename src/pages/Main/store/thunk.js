import { setToken, handleLoading } from './actions';
import { fetchSignIn } from './services';
import { setAxiosToken } from '../../../services';

export const signIn = params => dispatch => {
  dispatch(handleLoading(true));

  return fetchSignIn(params)
    .then(({ data }) => {
      setAxiosToken(data.token);
      dispatch(setToken(data.token));
    })
    .finally(() => dispatch(handleLoading(false)));
};
