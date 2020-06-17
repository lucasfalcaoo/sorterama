import { combineReducers } from 'redux';
import alertReducers from '../components/Alert/store/reducer';
import authReducers from '../pages/Login/store/reducer';
import userReducers from '../pages/User/store/reducer';
import reservationReducers from '../pages/Reservation/store/reducer';
import reservationsHistoryReducer from '../pages/ReservationsHistory/store/reducer';
import recoveryPasswordReducer from '../pages/ForgotPassword/store/reducer';
import changePasswordReducer from '../pages/ChangePassword/store/reducer';

export default combineReducers({
  alert: alertReducers,
  auth: authReducers,
  user: userReducers,
  reservation: reservationReducers,
  reservationsHistory: reservationsHistoryReducer,
  recoveryPassword: recoveryPasswordReducer,
  changePassword: changePasswordReducer,
});
