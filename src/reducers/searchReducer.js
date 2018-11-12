import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  NEW_QUERY,
} from '../actions/actions';

export const query = (state = '', action) => {
  switch (action.type) {
    case NEW_QUERY:
      return action.query;
    default:
      return state;
  }
};

export const personsByQuery = (state = { isFetching: false, query: '', persons: [] }, action) => {
  switch (action.type) {
    case REQUEST_PERSON:
      return {
        ...state,
        query: action.query,
        isFetching: true,
      };
    case RECIEVE_PERSON:
      return {
        ...state,
        isFetching: false,
        query: action.query,
        persons: action.items,
      };
    default:
      return state;
  }
};
