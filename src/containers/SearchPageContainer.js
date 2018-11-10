// The intention is that this component will generate cards and hold buttons for pagination.

import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';

const dummyPersons = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: [
      'https://swapi.co/api/films/2/',
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/3/',
      'https://swapi.co/api/films/1/',
      'https://swapi.co/api/films/7/',
    ],
    species: [
      'https://swapi.co/api/species/1/',
    ],
    vehicles: [
      'https://swapi.co/api/vehicles/14/',
      'https://swapi.co/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.co/api/starships/12/',
      'https://swapi.co/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.co/api/people/1/',
  },
  {
    name: 'C-3PO',
    url: 'https://swapi.co/api/people/2/',
  },
  {
    name: 'R2-D2',
    url: 'https://swapi.co/api/people/3/',
  },
  {
    name: 'Darth Vader',
    url: 'https://swapi.co/api/people/4/',
  },
  // {
  //   name: 'Leia Organa',
  //   url: 'https://swapi.co/api/people/5/',
  // },
  // {
  //   name: 'Owen Lars',
  //   url: 'https://swapi.co/api/people/6/',
  // },
  // {
  //   name: 'Beru Whitesun Lars',
  //   url: 'https://swapi.co/api/people/7/',
  // },
];

const mapStateToProps = () => ({
  persons: dummyPersons,
});

const mapDispatchToProps = () => ({
});

const SearchPageContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchPage);

export default SearchPageContainer;
