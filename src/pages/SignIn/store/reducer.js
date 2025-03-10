import { SET_TOKEN, HANDLE_LOADING, HANDLE_LOGOUT } from './constants';

const defaultState = {
  loading: false,
  token: null,
  status: 'success',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case HANDLE_LOADING: {
      return {
        ...state,
        loading: action.payload.status,
      };
    }
    case HANDLE_LOGOUT: {
      return defaultState;
    }
    default:
      return state;
  }
};
