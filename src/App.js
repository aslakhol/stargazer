import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Button,
  Col,
  Popover,
  PopoverBody,
  PopoverHeader,
  Input,
  InputGroup
} from 'reactstrap';
import ModalExample from './components/ModalExample';
import { simpleAction } from './actions/simpleAction';
import './styles/page.css';
import PersonCard from './components/PersonCard'
class App extends React.Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  constructor(props) {
    super(props);

    this.toggle = () => this.toggle();
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      // Første container, header logo etc. hamburger? 
      <div>
        <Container className="topHeader"> 
        <div>
          <Button id="usBtn" className="Popover1" onClick={this.toggle}>
            About Us
          </Button>
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="usBtn" toggle={this.toggle}>
            <PopoverHeader>About Us</PopoverHeader>
            <PopoverBody>Studenter ved NTNU som lager fete applikasjoner i IT2810, også kjent som webdev, også kjent som the informatiker-butcher.</PopoverBody>
          </Popover>
        </div>
        </Container>
        <Container className="searchContainer">
          <Row sm='12' md={{size: 6, offset: 3, height: 12,}}>
            <InputGroup className="searchStyle">
              <Input placeholder="search" />
            </InputGroup>
          </Row>
          <Row>
            <Col md="3" sm="4" mb="3">
              <PersonCard className="mb-3" /> 
            </Col>
          </Row>
        </Container>
        <ModalExample buttonLabel="hei" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

// CLIPBOARD START


// CLIPBOARD END

export default connect(mapStateToProps, mapDispatchToProps)(App);
