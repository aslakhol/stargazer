import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducer';


export default function configureStore(preloadedState) {
  return createStore(
    searchReducer,
    preloadedState,
  );
}