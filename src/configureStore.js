import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import itemReducer from './reducers/index';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

export default function configureStore(preloadedState) {
  return createStore(
    itemReducer,
    preloadedState,
    enhancer,
  );
}
