/* eslint-disable no-console */
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from './ducks';
import rootSaga from './sagas';

import history from '~/services/history';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(persistReducers(rootReducer(history)), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
