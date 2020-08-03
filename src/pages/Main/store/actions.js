import * as type from './constants';

export const setDraw = data => ({
  type: type.SET_DRAW,
  payload: { data },
});

export const setUser = data => ({
  type: type.SET_USER,
  payload: { data },
});

export const setSalespeople = data => ({
  type: type.SET_SALESPEOPLE,
  payload: { data },
});

export const setDashboard = data => ({
  type: type.SET_DASHBOARD,
  payload: { data },
});

export const setClientSearch = data => ({
  type: type.SET_CLIENT_SEARCH,
  payload: { data },
});

export const handleSearchLoading = status => ({
  type: type.HANDLE_SEARCH_LOADING,
  payload: { status },
});

export const handleLoading = status => ({
  type: type.HANDLE_LOADING,
  payload: { status },
});
