import { combineReducers } from 'redux';
import authReducers from '../pages/SignIn/store/reducer';

export default combineReducers({
  auth: authReducers,
});
