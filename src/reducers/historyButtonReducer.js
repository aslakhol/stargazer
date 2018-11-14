import { SHOW_HISTORY, HIDE_HISTORY } from '../constants';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_HISTORY:
      return true;
    case HIDE_HISTORY:
      return state;
    default:
      return state;
  }
};
