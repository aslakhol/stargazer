import { combineReducers } from 'redux';
import personReducer from './personReducer';
import modalReducer from './modalReducer';
import { personsByQuery, query } from './searchReducer';

export default combineReducers({
  currentPerson: personReducer,
  modalOpen: modalReducer,
  personsByQuery,
  query,
});
