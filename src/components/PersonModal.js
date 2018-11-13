import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card } from 'reactstrap';
import PersonCard from './PersonCard';


const dummyData = [ // This is temp
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: [
      'https://swapi.co/api/films/2/',
      'https://swapi.co/api/films/6/',
      'https://swapi.co/api/films/3/',
      'https://swapi.co/api/films/1/',
      'https://swapi.co/api/films/7/',
    ],
    species: [
      'https://swapi.co/api/species/1/',
    ],
    vehicles: [
      'https://swapi.co/api/vehicles/14/',
      'https://swapi.co/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.co/api/starships/12/',
      'https://swapi.co/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.co/api/people/1/',
  },
];

class PersonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Modal className='modalStyle' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} class='modal-lg'>
          <ModalBody>
            {dummyData.map(person => <ModalHeader> {person.name}</ModalHeader>)}
            <div>
              <Row>
                <Col md='6'>
                  <PersonCard></PersonCard>
                </Col>
                <Col md='6'>
                  <PersonCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>second one</h2>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter> Footer is Nothing So Far - close here?  </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PersonModal;
