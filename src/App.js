import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
} from 'reactstrap';

import ModalExample from './components/ModalExample';
import PersonCard from './components/PersonCard';
import './styles/page.css';
import PersonCardContainer from './containers/PersonCardContainer';

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
      // Første container, header logo etc. hamburger?
      <div>
        <Container className="searchContainer">
          <Row sm="12" md={{ size: 6, offset: 3, height: 12 }}>
            <InputGroup className="searchStyle">
              <Input placeholder="search" />
            </InputGroup>
          </Row>
          <Row>
            <Col md="3" sm="4" mb="3">
              <PersonCardContainer className="mb-3" />
            </Col>
          </Row>
        </Container>
        <ModalExample buttonLabel="hei" />
      </div>
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
