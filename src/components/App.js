import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
import SearchBarContainer from '../containers/SearchBarContainer';
import FilterButtonsContainer from '../containers/FilterButtonsContainer';
import PersonModalContainer from '../containers/PersonModalContainer';
import PageSelectContainer from '../containers/PageSelectContainer';
import stargazer from '../graphic/stargazer.svg';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <img width="40%" src={stargazer} alt="Stargazer" />
        </Col>
      </Row>
      <Row className="mt-3 mx-0">
        <FilterButtonsContainer />
      </Row>
      <Row className="my-3 mx-0">
        <SearchBarContainer />
      </Row>
      <Row className="mb-3">
        <SearchPageContainer />
      </Row>
      <Row>
        <PageSelectContainer />
      </Row>
      <PersonModalContainer />
    </Container>
  );
}

export default App;
