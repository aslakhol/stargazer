import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap';
import PersonImgContainer from '../containers/PersonImgContainer';
import PersonInfoContainer from '../containers/PersonInfoContainer';

const PersonModal = () => {
  return (
    <div>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>
          {dummyPerson.name}
          Navn her
          </ModalHeader>
        <Row>
          <Col md="6" sm="6">
            <PersonImgContainer person={dummyPerson} />
          </Col>
          <Col md="6" sm="6">
            <PersonInfoContainer person={dummyPerson} />
          </Col>
        </Row>
      </Modal>
    </div>
  )
}

export default PersonModal;
