import React from 'react';
import { Col } from 'reactstrap';
import PersonCardContainer from '../containers/PersonCardContainer';

const SearchPage = (props) => {
  const { persons } = props;
  return (
    persons.map(person => (
      <Col md="3" sm="6">
        <PersonCardContainer key={person.url} person={person} className={person.name} />
      </Col>
    ))
  );
};

export default SearchPage;
