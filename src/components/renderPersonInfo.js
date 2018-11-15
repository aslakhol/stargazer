import React from 'react';
import {
  Table,
} from 'reactstrap';

const renderPersonInfo = (props) => {
  const {
    person,
  } = props;

  return (
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
  );
};

export default renderPersonInfo;
