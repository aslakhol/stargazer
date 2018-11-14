import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
import SearchBarContainer from '../containers/SearchBarContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Container className="searchContainer">
        <Row className="my-3 mx-0">
          <SearchBarContainer />
        </Row>
        <Row className="mb-3">
          <SearchPageContainer />
        </Row>
      </Container>
    );
  }
}

export default App;
