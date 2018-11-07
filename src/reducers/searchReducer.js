import { combineReducers } from 'redux'
import {
  NEW_QUERY,
  REQUEST_PERSON,
  RECIEVE_PERSON,
} from "../constants/types"

function newQuery(state = "", action) {
  switch (action.type) {
    case NEW_QUERY:
      return action.newQuery;
    default:
      return state;
  }
}

function items(state = {
  isFetching: false,
  newQuery: "",
  items: [],
}, action) {
  switch (action.type){
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        newQuery: action.newQuery,
        isFetching: true,
      });
    case RECIEVE_PERSON:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
      });
    default:
      return state;
  }
}

function namesByQuery(state = {}, action) {
  switch(action.type) {
    case RECIEVE_PERSON:
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        [action.newQuery]: items(state[action.newQuery]), action,
      });
    default:
      return state;
  }
}

export default combineReducers({
  namesByQuery,
  newQuery
})
