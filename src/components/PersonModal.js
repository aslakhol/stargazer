import React from 'react';
import {
  Modal,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap';
import PersonInfoContainer from '../containers/PersonInfoContainer';

const PersonModal = (props) => {
  const {
    modalOpen,
    currentPerson,
    closeModal,
    imgUrl,
  } = props;

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={() => closeModal()}>
        <ModalHeader>
          {currentPerson.name}
        </ModalHeader>
        <Row>
          <Col md="5" sm="7">
            <img src={imgUrl} alt={currentPerson.name} className="img-fluid rounded ml-3 mt-2" />
          </Col>
          <Col md="7" sm="7">
            <PersonInfoContainer person={currentPerson} />
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default PersonModal;
