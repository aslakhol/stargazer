import React from 'react';
import {
  Modal,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap';
import PersonImgContainer from '../containers/PersonImgContainer';
import PersonInfoContainer from '../containers/PersonInfoContainer';

const PersonModal = (props) => {
  const {
    modalOpen,
    currentPerson,
    closeModal,
  } = props;

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={() => closeModal()}>
        <ModalHeader>
          {currentPerson.name}
        </ModalHeader>
        <Row>
          <Col md="6" sm="6">
            <PersonImgContainer person={currentPerson} />
          </Col>
          <Col md="6" sm="6">
            <PersonInfoContainer person={currentPerson} />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default PersonModal;
