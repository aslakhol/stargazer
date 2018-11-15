import { combineReducers } from 'redux';
import personReducer from './personReducer';
import modalReducer from './modalReducer';
import searchReducer from './searchReducer';
import timeoutReducer from './timeoutReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  currentPerson: personReducer,
  modalOpen: modalReducer,
  request: searchReducer,
  timeout: timeoutReducer,
  filter: filterReducer,
});
