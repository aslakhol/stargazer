import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Input,
  InputGroup,
} from 'reactstrap';

import './styles/page.css';
import SearchPageContainer from './containers/SearchPageContainer';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleIsOpen = () => this.toggleIsOpen(); // I don't know about this.

    this.state = {
      isOpen: false,
    };
  }

  toggleIsOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
