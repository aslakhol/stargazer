import { connect } from 'react-redux';
import renderPersonInfo from '../components/PersonInfo';
import { clickPersonCard, pressEnterPersonCard } from '../actions/multiActions';

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
)(renderPersonInfo);

export default PersonCardContainer;
