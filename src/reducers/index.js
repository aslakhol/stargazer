import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import searcher from "./searchReducer"

export default combineReducers({
 simpleReducer,
 searcher
});
