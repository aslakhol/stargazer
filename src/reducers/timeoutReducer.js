import { NEW_TIMEOUT } from '../constants';

const initialState = -1;

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_TIMEOUT:
      return action.timeout;
    default:
      return state;
  }
};
