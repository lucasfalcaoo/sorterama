import { SET_MESSAGE, CLEAR_MESSAGE } from './constants';

const defaultState = {
  title: '',
  message: '',
  severity: 'success',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        title: action.payload.title,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    }
    case CLEAR_MESSAGE: {
      return defaultState;
    }
    default:
      return state;
  }
};
