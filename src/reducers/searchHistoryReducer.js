import {
  REQUEST_HISTORY,
} from '../constants';

const initialState = {
  history: [],
};

const searchHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
        history: action.payload,
      };
    default:
      return state;
  }
};
