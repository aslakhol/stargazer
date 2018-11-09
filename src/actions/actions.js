import fetch from 'cross-fetch';

export const REQUEST_PERSON = 'REQUEST_PERSON';
export const RECIEVE_PERSON = 'RECIEVE_PERSON';
export const NEW_QUERY = 'NEW_QUERY';
export const SELECT_PERSON = 'SELECT_PERSON';


export const selectPerson = person => ({
  type: SELECT_PERSON,
  person,
});

const requestPerson = person => ({
  type: REQUEST_PERSON,
  person,
});

function recievePerson(person, json) {
  return {
    type: RECIEVE_PERSON,
    person,
    recievedAt: Date.now(),
  };
}

const fetchPersons = person => (dispatch) => {
  dispatch(requestPerson(person));
  return fetch(`https://swapi.co/api/people?search=${person}.json`)
    .then(response => response.json())
    .then(json => dispatch(recievePerson(person, json)));
};

const shouldFetch = (state, person) => {
  const persons = state.personsByPerson[person];
  if (!persons) {
    return true;
  } if (persons.isFetching) {
    return false;
  }
  return persons;
};

export const fetchPersonsIfNeeded = person => (dispatch, getState) => {
  if (shouldFetch(getState(), person)) {
    return dispatch(fetchPersons(person));
  }
};
