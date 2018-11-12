import { combineReducers } from 'redux';
import personReducer from './personReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  currentPerson: personReducer,
  modalOpen: modalReducer,
});
