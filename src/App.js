import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Col,
  Row,
  Input,
  InputGroup,
} from 'reactstrap';
import Search from './components/Search';
import Person from './components/Person';

import { fetchPersonsIfNeeded } from './actions/actions';
import './styles/page.css';
import SearchPageContainer from './containers/SearchPageContainer';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleIsOpen = () => this.toggleIsOpen(); // I don't know about this.

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchPersonsIfNeeded(query));
  }

  handleChange(query) {
    const { dispatch } = this.props;
    dispatch(fetchPersonsIfNeeded(query));
  }

  toggleIsOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }


  render() {
    const {
      query,
      items,
      isFetching,
    } = this.props;

    console.log(this.props);

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
          <Search value={query} onChange={this.handleChange} />
        </Row>
        <Row>
          <Col md="12">
            {/* {isFetching && items.length === 0
              && <h2>Loading</h2>}

            {!isFetching && items.length <= 0
              && <h2>No results</h2>}

            {items.length > 0
              && <Person items={items} />
            } */}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { query, personsByQuery } = state;
  const { isFetching, items } = personsByQuery[query] || {
    query,
    isFetching: true,
    items: [],
  };
  return {
    query,
    items,
    isFetching,
  };
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
