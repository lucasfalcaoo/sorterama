import storage from 'redux-persist/lib/storage';
import allReducers from './reducer';
import { HANDLE_LOGOUT } from '../pages/SignIn/store/constants';

export default function(state, action) {
  let appState = state;
  if (action.type === HANDLE_LOGOUT) {
    storage.removeItem('persist:sorterama');
    appState = undefined;
  }
  return allReducers(appState, action);
}
