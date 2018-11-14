import {
  NEW_QUERY,
  REQUEST_PERSON,
  RECIEVE_PERSON,
  NEW_TIMEOUT,
  API_TIMEOUT_DURATION,
} from '../utils/constants';
import { createSearchQueryString } from '../utils/urlUtil';

export const makeQuery = (query, searchTerm) => ({ type: NEW_QUERY, query, searchTerm });
export const requestPerson = (query, searchTerm) => ({
  type: REQUEST_PERSON,
  query,
  searchTerm,
  requestedAt: Date.now(),
});
export const recievePerson = (query, searchTerm, response = []) => ({
  type: RECIEVE_PERSON,
  query,
  searchTerm,
  response,
  recievedAt: Date.now(),
});
export const storeTimeout = timeout => ({ type: NEW_TIMEOUT, timeout });

const fetchPersons = searchTerm => (dispatch, getState) => {
  const { filter } = getState();
  const queryString = createSearchQueryString(searchTerm, filter);
  dispatch(makeQuery(queryString, searchTerm));
  dispatch(requestPerson(queryString, searchTerm));
  fetch(queryString)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(queryString, searchTerm, json.rows)));
};

export const fetchPersonsIfNeeded = query => (dispatch, getState) => {
  clearTimeout(getState().timeout);
  const timeout = setTimeout(() => { dispatch(fetchPersons(query)); }, API_TIMEOUT_DURATION);
  dispatch(storeTimeout(timeout));
};
