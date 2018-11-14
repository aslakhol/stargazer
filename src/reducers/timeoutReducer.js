import { NEW_TIMEOUT } from '../actions/types';

const initialState = -1;

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_TIMEOUT:
      return action.timeout;
    default:
      return state;
  }
};
