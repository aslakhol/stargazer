import {

} from '../constants';

const initialState = {
  history: [],
};

const searchHistoryReducer(state = initialState, action) {
  switch(action.type){

  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
        ...state,
      }
    default:
        return state;
      }
  }
};
