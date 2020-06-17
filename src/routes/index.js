import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { setAPI } from '../services';
// import LayoutRoute from '../components/LayoutRoute/components';
import SignIn from '../pages/SignIn/components';
import Main from '../pages/Main/components';
// import PageNotFound from '../pages/PageNotFound/components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';

setAPI();

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/principal" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
