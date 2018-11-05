import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import ModalExample from './components/ModalExample';
import CardExample from './components/CardExample';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => this.toggle();
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="3" sm="4" mb="3">
              <CardExample className="mb-3" />
            </Col>
            <Col md="3" sm="4" mb="3">
              <CardExample />
            </Col>
          </Row>
          <Row>
            <Col md="3" sm="4" mb="3">
              <CardExample />
            </Col>
            <Col md="3" sm="4" mb="3">
              <CardExample />
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
