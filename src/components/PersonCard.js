import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Table,
} from 'reactstrap';

<<<<<<< Updated upstream
const dummyData = [ // This is temp
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
];

const PersonCard = (props) => {
  const { className } = props;
  return (
    <div className={className}>
=======
const PersonCard = (props) => {
  const {
    person,
    imgUrl,
    cardCondition,
  } = props;

  return cardCondition.showImg ? ( //TODO: Dersom url ikke eksisterer - exception -> default photo silhouette - Male/Female
    <div className="mb-4" >
      <img top width="106%" src={imgUrl} />
    </div>
  ) : cardCondition.showName ? ( 
    <div className="mb-4" >
>>>>>>> Stashed changes
      <Card>
        <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest/scale-to-width-down/500?cb=20170927034529" />
        <CardBody>
          {dummyData.map(person => <CardTitle>{person.name}</CardTitle>)}
        </CardBody>
      </Card>
    </div>
  ) : cardCondition.showInfo ? (
      <div className="mb-4">
            <Table dark>
            <tbody>
              <tr>
                <th scope="row">Height</th>
                <td>{person.height}</td>
              </tr>
              <tr>
                <th scope="row">Mass</th>
                <td>{person.mass}</td>
              </tr>
              <tr>
                <th scope="row">Hair Color</th>
                <td>{person.hair_color}</td>
              </tr>
              <tr>
                <th scope="row">Skin Color</th>
                <td>{person.skin_color}</td>
              </tr>
              <tr>
                <th scope="row">Eye Color</th>
                <td>{person.eye_color}</td>
              </tr>
              <tr>
                <th scope="row">Birth Year</th>
                <td>{person.birth_year}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{person.gender}</td>
              </tr>
            </tbody>
          </Table>
      </div>
  ) : null;
};

export default PersonCard;
