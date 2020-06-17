import React from 'react';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import moment from 'moment';
import 'moment/locale/pt-br';

import { store, persistor } from './store';
import { theme, Root } from './theme/globalStyles';

import Routes from './routes';

moment.locale('pt-BR');

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Root>
          <CssBaseline />
          <Routes />
        </Root>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
