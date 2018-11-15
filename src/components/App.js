import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
import SearchBarContainer from '../containers/SearchBarContainer';
import FilterButtonsContainer from '../containers/FilterButtonsContainer';
import PageSelectContainer from '../containers/PageSelectContainer';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
