import {
  RECIEVE_PERSON,
  REQUEST_PERSON,
  NEW_QUERY,
} from '../utils/constants';

const initialState = {
  isFetching: false,
  query: '',
  requestedAt: 0,
  receivedAt: 0,
  result: [],
};

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
        requestedAt: action.requestedAt,
      };
    case RECIEVE_PERSON:
      return {
        ...state,
        isFetching: false,
        query: action.query,
        result: action.response,
        receivedAt: action.receivedAt,
      };
    default:
      return state;
  }
};
