import { connect } from 'react-redux';

import { setModalClosed } from '../actions/modalActions';
import PersonModal from '../components/PersonModal';

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  currentPerson: state.currentPerson,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(setModalClosed()),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonModal);

export default PersonCardContainer;
