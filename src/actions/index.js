import { NEW_QUERY, REQUEST_PERSON, RECIEVE_PERSON } from "../constants/types"

const initialState = {
  items: [],
}

const updateQuery = (newQuery) => {
  return {
    type: NEW_QUERY,
    newQuery
  };
}

const requestPerson = (newQuery) => {
  return {
    type: REQUEST_PERSON,
    newQuery,
  };
}

const recievePerson = (newQuery, persons) => {
  return {
    type: RECIEVE_PERSON,
    newQuery,
    persons,
  };
}

const items  = (array) =>{
  let personArray = [];
  array.forEach((item) => {
    personArray = personArray.concat(item.results);
  });
  return personArray.map((item) => {
    return {
      type: "person",
      name: item.name,
      gender: item.gender,
      height: item.height,
      mass: item.mass,
    };
  })
}

const fetchPersons = (newQuery) => {
  const endpoint = [
    `https://swapi.co/api/people?search=${newQuery}`,
  ];

  return (dispatch) => {
    dispatch(updateQuery(newQuery));
    dispatch(requestPerson(newQuery));
    return (endpoint.map(url => 
      fetch(url).then(resp => resp.json()),
    )).then(json => console.log(json))
    .then(array => items(array))
    .then(json => dispatch(recievePerson(newQuery, json)));
  };
}

const shouldFetch  = (state, newQuery) => {
  const stuff = state.itemsByQuery[newQuery];
  if (!stuff){
    return true;
  } else if (stuff.isFetching){
    return false;
  }
  return false;
}

export const fetchItems = (newQuery) => {
  return(dispatch, getState) => {
    if(shouldFetch(getState(), newQuery)){
      return dispatch(fetchPersons(newQuery));
    }
    return dispatch(updateQuery(newQuery));
  }
}
