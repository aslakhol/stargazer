import { combineReducers } from 'redux';
import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  SELECT_PERSON,
} from '../actions/actions';

const selectedPerson = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_PERSON:
      return action.person;
    default:
      return state;
  }
};

const persons = (state = { isFetching: false, items: [] }, action) => {
  switch (action.type) {
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECIEVE_PERSON:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.persons,
        lastUpdated: action.recievedAt,
      });
    default:
      return state;
  }
};


const personByPersons = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_PERSON:
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        [action.person]: persons(state[action.person], action),
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personByPersons,
  selectedPerson,
});

export default rootReducer;
