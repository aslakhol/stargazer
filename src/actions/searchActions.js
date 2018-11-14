import {
  NEW_QUERY,
  REQUEST_PERSON,
  RECIEVE_PERSON,
  NEW_TIMEOUT,
  API_ENDPOINT,
  API_TIMEOUT_DURATION,
} from '../constants';

export const makeQuery = query => ({ type: NEW_QUERY, query });
export const requestPerson = query => ({
  type: REQUEST_PERSON,
  query,
  requestedAt: Date.now(),
});
export const recievePerson = (query, response) => ({
  type: RECIEVE_PERSON,
  query,
  response,
  recievedAt: Date.now(),
});
export const storeTimeout = timeout => ({ type: NEW_TIMEOUT, timeout });

const fetchPersons = query => (dispatch) => {
  const queryString = `${API_ENDPOINT}people?search=${query}`;
  dispatch(makeQuery(query));
  dispatch(requestPerson(query));
  fetch(queryString)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(query, json)));
};

export const fetchPersonsIfNeeded = query => (dispatch, getState) => {
  clearTimeout(getState().timeout);
  const timeout = setTimeout(() => { dispatch(fetchPersons(query)); }, API_TIMEOUT_DURATION);
  dispatch(storeTimeout(timeout));
};
