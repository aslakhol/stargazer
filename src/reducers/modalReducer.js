import { OPEN_MODAL, CLOSE_MODAL } from '../utils/constants';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
