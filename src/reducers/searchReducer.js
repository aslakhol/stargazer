import { combineReducers } from 'redux';
import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  NEW_QUERY,
} from '../actions/actions';

const query = (state = '', action) => {
  switch (action.type) {
    case NEW_QUERY:
      return action.query;
    default:
      return state;
  }
};

const items = (state = { isFetching: false, query: '', items: [] }, action) => {
  switch (action.type) {
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        query: action.query,
        isFetching: true,
      });
    case RECIEVE_PERSON:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
};

const personsByQuery = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_PERSON:
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        [action.query]: items(state[action.query], action),
      });
    default:
      return state;
  }
};

export default combineReducers({
  personsByQuery,
  query,
});
