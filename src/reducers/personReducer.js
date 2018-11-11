import { SET_CURRENT_PERSON } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PERSON:
      return action.data;
    default:
      return state;
  }
};
