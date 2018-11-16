import { connect } from 'react-redux';

import { setModalClosed } from '../actions/modalActions';
import { getImgURL } from '../utils/urlUtil';
import PersonModal from '../components/PersonModal';

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  currentPerson: state.currentPerson,
  imgUrl: getImgURL(state.currentPerson.id),
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(setModalClosed()),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonModal);

export default PersonCardContainer;
