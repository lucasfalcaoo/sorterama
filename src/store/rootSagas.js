import { all } from 'redux-saga/effects';

import auth from '../pages/Login/store/sagas';
import user from '../pages/User/store/sagas';
import reservation from '../pages/Reservation/store/sagas';
import reservationsHistory from '../pages/ReservationsHistory/store/sagas';
import recoveryPassword from '../pages/ForgotPassword/store/sagas';

export default function* rootSaga() {
  return yield all([
    auth,
    user,
    reservation,
    reservationsHistory,
    recoveryPassword,
  ]);
}
