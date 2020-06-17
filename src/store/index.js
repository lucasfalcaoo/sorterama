import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './clearStateMiddleware';

const persistConfig = {
  storage,
  key: 'sorterama',
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composer =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk), console.tron.createEnhancer())
    : composeEnhancers(applyMiddleware(thunk));

const store = createStore(persistedReducer, composer);

const persistor = persistStore(store);

export { store, persistor };
