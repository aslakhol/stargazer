import { connect } from 'react-redux';
import { clickPersonCard, pressEnterPersonCard } from '../actions/multiActions';
import PersonModal from '../components/OldPersonModal';

const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
  cardCondition: ownProps.cardCondition,
});

const mapDispatchToProps = dispatch => ({
  onClick: data => dispatch(clickPersonCard(data)),
  handleKeyPress: (event, data) => dispatch(pressEnterPersonCard(event, data)),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonModal);

export default PersonCardContainer;
