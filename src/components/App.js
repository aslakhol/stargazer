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
import '../utils/fontStyle.css';

/*
By using containers for the different functionality we
have managed to 'shrink' the size of our App.js file
to a neat and comprehensive format.
*/

function App() {
  return (
    <Container>
      <Row>
        <Col className="titleStyle">
          STARGAZER
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
