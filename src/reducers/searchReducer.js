import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  NEW_QUERY,
} from '../utils/constants';

const initialState = {
  isFetching: false,
  query: '',
  searchTerm: '',
  requestedAt: 0,
  receivedAt: 0,
  count: 0,
  result: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUERY:
      return {
        ...state,
        query: action.query,
        searchTerm: action.searchTerm,
      };
    case REQUEST_PERSON:
      return {
        ...state,
        isFetching: true,
        query: action.query,
        searchTerm: action.searchTerm,
        requestedAt: action.requestedAt,
      };
    case RECIEVE_PERSON:
      return {
        ...state,
        isFetching: false,
        query: action.query,
        searchTerm: action.searchTerm,
        count: action.count,
        result: action.response,
        receivedAt: action.receivedAt,
      };
    default:
      return state;
  }
};
