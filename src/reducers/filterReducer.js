import { INCLUDE_SELECTED, EXCLUDE_SELECTED } from '../utils/constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case INCLUDE_SELECTED:
      return [...state, action.selected];
    case EXCLUDE_SELECTED: {
      const i = state.indexOf(action.selected);
      return [...state.slice(0, i), ...state.slice(i + 1)];
    }
    default:
      return state;
  }
};
