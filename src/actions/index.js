import { NEW_QUERY, REQUEST_PERSON, RECIEVE_PERSON } from "../constants/types"


function updateQuery(newQuery){
  return {
    type: NEW_QUERY,
    newQuery
  };
}

function requestPerson(newQuery){
  return {
    type: REQUEST_PERSON,
    newQuery,
  };
}

function recievePerson(newQuery, persons){
  return {
    type: RECIEVE_PERSON,
    newQuery,
    persons,
  };
}

function items(array){
  let personArray = [];
  array.forEach((item) => {
    personArray = personArray.concat(item.results);
  });
  return personArray.map((item) => {
    return {
      type: 'person',
      name: item.name,
      gender: item.gender,
      height: item.height,
      mass: item.mass,
    };
  })
}















export const showPerson = personId => ({
  type: ADD_PERSON,
  personId
})

function requestPerson(name){
  return {
    type: REQUEST_PERSON,
    name
  }
}

function recievePerson(name, json){
  return {
    type: RECIEVE_PERSON,
    name,
    persons: json.data.children.map(child => child.data),
  }
}


export function getPerson(name) {
  return dispatch => {
    dispatch(requestPerson(name))
    return fetch(`https://swapi.co/api/people?search=${name}.json`)
      .then(response => response.json())
      .then(json => dispatch(recievePerson(name, json)))
  }
}

