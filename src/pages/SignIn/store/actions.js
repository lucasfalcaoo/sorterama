import * as type from './constants';

export const setToken = token => ({
  type: type.SET_TOKEN,
  payload: { token },
});

export const handleLoading = status => ({
  type: type.HANDLE_LOADING,
  payload: { status },
});

export const handleLogout = () => ({
  type: type.HANDLE_LOGOUT,
});
