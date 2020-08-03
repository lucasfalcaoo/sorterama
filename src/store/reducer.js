import { combineReducers } from 'redux';
import authReducers from '../pages/SignIn/store/reducer';
import mainReducers from '../pages/Main/store/reducer';
import dialogReducers from '../components/Dialog/store/reducer';

export default combineReducers({
  auth: authReducers,
  main: mainReducers,
  dialog: dialogReducers,
});
