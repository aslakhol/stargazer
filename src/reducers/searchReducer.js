import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  NEW_QUERY,
} from '../actions/types';

const initialState = { isFetching: false, query: '', result: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUERY:
      return {
        ...state,
        query: action.query,
      };
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
        result: action.response,
      };
    default:
      return state;
  }
};
