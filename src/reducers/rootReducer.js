import { combineReducers } from 'redux';
import personReducer from './personReducer';
import modalReducer from './modalReducer';
import searchReducer from './searchReducer';
import timeoutReducer from './timeoutReducer';
import historyReducer from './searchHistoryReducer';

export default combineReducers({
  currentPerson: personReducer,
  modalOpen: modalReducer,
  request: searchReducer,
  timeout: timeoutReducer,
  history: historyReducer,
});
