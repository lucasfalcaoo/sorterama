import * as type from './constants';

export const setToken = token => ({
  type: type.SET_TOKEN,
  payload: { token },
});

export const handleLoading = status => ({
  type: type.HANDLE_LOADING,
  payload: { status },
});
