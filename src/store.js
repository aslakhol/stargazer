import { createStore } from 'redux';
import searchReducer from './reducers/searchReducer';

export default function configureStore(preloadedState) {
  return createStore(
    searchReducer,
    preloadedState,
  );
}