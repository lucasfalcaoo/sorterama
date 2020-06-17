import storage from 'redux-persist/lib/storage';
import allReducers from './reducer';
import { HANDLE_TO_LOGOUT } from '../pages/Login/store/constants';

export const rootReducer = (state, action) => {
  let appState = state;
  if (action.type === HANDLE_TO_LOGOUT) {
    storage.removeItem('persist:sorterama');
    appState = undefined;
  }
  return allReducers(appState, action);
};
