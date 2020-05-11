import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSagas from './reducers/rootSagas';
import {persistStore} from 'redux-persist';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    //
    sagaMiddleware,
    // thunk,
  ];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      stateTransformer: (state) => JSON.parse(JSON.stringify(state)),
    });

    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSagas);

  return [store, persistor];
};
