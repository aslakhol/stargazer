import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
import SearchBarContainer from '../containers/SearchBarContainer';
import SearchHistoryContainer from '../containers/SearchHistoryContainer';

function App() {
  return (
    <Container>
      <Row className="my-3 mx-0">
        <SearchBarContainer />
      </Row>
      <Row className="mb-3">
        <SearchPageContainer />
      </Row>
      <Row>
        <SearchHistoryContainer />
      </Row>
    </Container>
  );
}

export default App;
