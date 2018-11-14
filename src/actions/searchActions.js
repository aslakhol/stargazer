import {
  NEW_QUERY,
  REQUEST_PERSON,
  RECIEVE_PERSON,
  NEW_TIMEOUT,
} from './types';

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
  const endpoint = `https://swapi.co/api/people?search=${query}`;
  dispatch(makeQuery(query));
  dispatch(requestPerson(query));
  fetch(endpoint)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(query, json.results)));
};

export const fetchPersonsIfNeeded = query => (dispatch, getState) => {
  clearTimeout(getState().timeout);
  const requestTimeoutInMs = 500;
  const timeout = setTimeout(() => { dispatch(fetchPersons(query)); }, requestTimeoutInMs);
  dispatch(storeTimeout(timeout));
};
