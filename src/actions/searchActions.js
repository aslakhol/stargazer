import { NEW_QUERY, REQUEST_PERSON, RECIEVE_PERSON } from './types';
import apiUtil from '../utils/apiUtil';

export const makeQuery = query => ({ type: NEW_QUERY, query });
export const requestPerson = query => ({ type: REQUEST_PERSON, query });
export const recievePerson = (query, response) => ({
  type: RECIEVE_PERSON,
  query,
  response,
  recievedAt: Date.now(),
});

const fetchPersons = query => (dispatch) => {
  const endpoint = `https://swapi.co/api/people?search=${query}`;
  dispatch(makeQuery(query));
  dispatch(requestPerson(query));
  fetch(endpoint)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(query, json.results)));
};

export const fetchPersonsIfNeeded = query => (dispatch) => {
  if (apiUtil.shouldFetch()) {
    dispatch(fetchPersons(query));
  }
};
