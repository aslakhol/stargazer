import { combineReducers } from 'redux'
import {
  ADD_PERSON,
  REQUEST_PERSON,
  RECIEVE_PERSON,
} from "../actions/index"

function searchedName(state = "test", action) {
  switch (action.type) {
    case ADD_PERSON:
      return action.name
    default:
      return state
  }
}

/*function names(
  state = {
    items: []
  },
  action
) {
  switch (action.type){
    case REQUEST_PERSON:
      return Object.assign({}, state, {
        isFetching: true,
      })
    default:
      return state;
  }
} */

function namesByOrder(state = {})