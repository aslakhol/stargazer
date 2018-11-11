import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import personReducer from './personReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  simpleReducer,
  currentPerson: personReducer,
  modalOpen: modalReducer,
});
