import { SORT_BY_SELECTED } from '../utils/constants';

const initialState = { column: 'id', direction: 'asc' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_SELECTED:
      return {
        ...state,
        column: action.selected,
      };
    default:
      return state;
  }
};
