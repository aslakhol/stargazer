import React from 'react';
import {
  Container,
  Col,
  Row,
  Input,
  InputGroup,
} from 'reactstrap';
import Search from './Search';
import Person from './Person';

import SearchPageContainer from '../containers/SearchPageContainer';
import PersonModal from './PersonModal';

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
          <PersonModal />
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
      </Container>
    );
  }
}

export default App;
