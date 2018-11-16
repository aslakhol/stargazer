import React from 'react';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchHistoryContainer from '../containers/SearchHistoryContainer';
import FilterButtonsContainer from '../containers/FilterButtonsContainer';
import PersonModalContainer from '../containers/PersonModalContainer';
import PageSelectContainer from '../containers/PageSelectContainer';
import SortingButtonsContainer from '../containers/SortingButtonsContainer';

const App = () => (
  <Container>
    <Row className="mt-3">
      <Col>
        <FilterButtonsContainer />
      </Col>
      <Col>
        <SortingButtonsContainer />
      </Col>
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
    <Row>
      <SearchHistoryContainer />
    </Row>
    <PersonModalContainer />
  </Container>
);

export default App;
