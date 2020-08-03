import * as type from './constants';

export const setMessage = ({ title, message, severity }) => ({
  type: type.SET_MESSAGE,
  payload: { title, message, severity },
});

export const clearMessage = () => ({
  type: type.CLEAR_MESSAGE,
});
