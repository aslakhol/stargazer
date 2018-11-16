import { SORT_BY_SELECTED } from '../utils/constants';

const initialState = { sortBy: 'id', order: 'asc' };

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_SELECTED:
      return {
        ...state,
        sortBy: action.selected,
      };
    default:
      return state;
  }
};
