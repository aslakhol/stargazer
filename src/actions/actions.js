import fetch from 'isomorphic-fetch';

export const REQUEST_PERSON = 'REQUEST_PERSON';
export const RECIEVE_PERSON = 'RECIEVE_PERSON';
export const NEW_QUERY = 'NEW_QUERY';

function newQuery(query) {
  return {
    type: NEW_QUERY,
    query,
  };
}

function requestPerson(query) {
  return {
    type: REQUEST_PERSON,
    query,
  };
}

function recievePerson(query, items) {
  return {
    type: RECIEVE_PERSON,
    query,
    items,
    recievedAt: Date.now(),
  };
}

function prepareItems(array) {
  let combined = [];
  array.forEach((item) => {
    combined = combined.concat(item.results);
  });
  return combined.map(item => ({
    type: 'person',
    name: item.name,
    height: item.height,
    mass: item.mass,
    hair_color: item.hair_color,
    skin_color: item.skin_color,
    eye_color: item.eye_color,
    birth_year: item.birth_year,
    gender: item.gender,
    homeworld: item.homeworld,
  }));
}

function fetchItems(query) {
  const endpoint = [
    `https://swapi.co/api/people?search=${query}`,
  ];
  return (dispatch) => {
    dispatch(newQuery(query));
    dispatch(requestPerson(query));
    return Promise.all(endpoint.map(url => fetch(url).then(resp => resp.json())))
      .then(array => prepareItems(array))
      .then(json => dispatch(recievePerson(query, json)));
  };
}

const shouldFetch = (state, query) => {
  const persons = state.personsByQuery[query];
  if (!persons) {
    return true;
  } if (persons.isFetching) {
    return false;
  }
  return false;
};

export function fetchPersonsIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetch(getState(), query)) {
      return dispatch(fetchItems(query));
    }
    return dispatch(newQuery(query));
  };
}
