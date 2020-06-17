import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { rootReducer } from './clearStateMiddleware';

import rootSagas from './rootSagas';

const persistConfig = {
  storage,
  key: 'sorterama',
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2,
};

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composer =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(
        applyMiddleware(sagaMiddleware),
        console.tron.createEnhancer()
      )
    : composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
