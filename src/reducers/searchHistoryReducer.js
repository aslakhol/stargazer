import {
  REQUEST_HISTORY, SHOW_HISTORY, HIDE_HISTORY, RECEIVE_HISTORY,
} from '../constants';

const initialState = {
  queries: [],
  isOpen: false,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
        ...state,
        queries: action.payload,
      };
    case RECEIVE_HISTORY:
      return {
        ...state,
        result: action.response,
      };
    case SHOW_HISTORY:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_HISTORY:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default historyReducer;
