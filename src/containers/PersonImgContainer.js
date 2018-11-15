import { connect } from 'react-redux';
import renderPersonImg from '../components/renderPersonImg';
import { clickPersonCard, pressEnterPersonCard } from '../actions/multiActions';

// this should probably be somewhere else with time.
const getImgURL = (person) => {
  const id = 1;
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
};

// skifte til state.currentperson
const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
  imgUrl: getImgURL(ownProps.person),
  cardCondition: ownProps.cardCondition,
});

const mapDispatchToProps = dispatch => ({
  onClick: data => dispatch(clickPersonCard(data)),
  handleKeyPress: (event, data) => dispatch(pressEnterPersonCard(event, data)),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(renderPersonImg);

export default PersonCardContainer;
