import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

import SearchPageContainer from '../containers/SearchPageContainer';
<<<<<<< HEAD
import SearchHistory from './SearchHistory';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const { query, fetchPersonsIfNeeded } = this.props;
    fetchPersonsIfNeeded(query);
  }

  render() {
    const {
      query,
      fetchPersonsIfNeeded,
      isFetching,
      persons,
    } = this.props;

    return (
      <Container className="searchContainer">
        <Row sm="12" md={{ size: 6, offset: 3, height: 12 }} className="my-3 mx-0">
          <InputGroup className="searchStyle">
            <Input placeholder="search" />
          </InputGroup>
        </Row>
        <Row className="mb-3">
          <SearchPageContainer />
        </Row>
        <Row>
          <Search value={query} onChange={e => fetchPersonsIfNeeded(e)} />
        </Row>
        <Row>
          <Col md="12">
            {isFetching && persons.length === 0
              && <h2>Loading</h2>}

            {!isFetching && persons.length <= 0
              && <h2>No results</h2>}

            {persons.length > 0
              && <Person items={persons} />
            }
          </Col>
        </Row>
        <SearchHistory />
      </Container>
    );
  }
=======
import SearchBarContainer from '../containers/SearchBarContainer';

function App() {
  return (
    <Container>
      <Row className="my-3 mx-0">
        <SearchBarContainer />
      </Row>
      <Row className="mb-3">
        <SearchPageContainer />
      </Row>
    </Container>
  );
>>>>>>> 028c6ff647267a97c187e0a7167ac624cfa83323
}

export default App;
