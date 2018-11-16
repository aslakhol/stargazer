import { SET_PAGE, NEXT_PAGE, PREV_PAGE } from '../utils/constants';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.pageNum;
    case NEXT_PAGE:
      return state + 1;
    case PREV_PAGE:
      return state - 1;
    default:
      return state;
  }
};
