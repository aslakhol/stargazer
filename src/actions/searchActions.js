import {
  NEW_QUERY,
  REQUEST_PERSON,
  RECIEVE_PERSON,
  NEW_TIMEOUT,
  API_TIMEOUT_DURATION,
} from '../utils/constants';
import { createSearchQueryString } from '../utils/urlUtil';
import { fetchHistory } from './searchHistoryActions';

export const makeQuery = (query, searchTerm) => ({ type: NEW_QUERY, query, searchTerm });
export const requestPerson = (query, searchTerm) => ({
  type: REQUEST_PERSON,
  query,
  searchTerm,
  requestedAt: Date.now(),
});
export const recievePerson = (query, searchTerm, response = { count: 0, row: [] }) => ({
  type: RECIEVE_PERSON,
  query,
  searchTerm,
  count: response.count,
  response: response.rows,
  recievedAt: Date.now(),
});
export const storeTimeout = timeout => ({ type: NEW_TIMEOUT, timeout });

const fetchPersons = searchTerm => (dispatch, getState) => {
  const { filter, currentPage, sort } = getState();
  const queryString = createSearchQueryString(searchTerm, filter, currentPage, sort.sortBy);
  dispatch(makeQuery(queryString, searchTerm));
  dispatch(requestPerson(queryString, searchTerm));
  fetch(queryString)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(queryString, searchTerm, json)))
    .then(x => dispatch(fetchHistory(x)));
};

export const fetchPersonsIfNeeded = query => (dispatch, getState) => {
  clearTimeout(getState().timeout);
  const timeout = setTimeout(() => { dispatch(fetchPersons(query)); }, API_TIMEOUT_DURATION);
  dispatch(storeTimeout(timeout));
};
