import React from 'react';

import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import moment from 'moment';
import 'moment/locale/pt-br';

import { setAPI } from './services';
import { store, persistor } from './store';
import { theme, Root } from './theme/globalStyles';
import Dialog from './components/Dialog/components';

import Routes from './routes';

export default function App() {
  setAPI();
  moment.locale('pt-BR');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Root>
            <CssBaseline />
            <Routes />
            <Dialog />
          </Root>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
