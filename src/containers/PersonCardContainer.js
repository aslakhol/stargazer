import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { clickPersonCard } from '../actions/multiActions';

// this should probably be somewhere else with time.
const getImgURL = (person) => {
  return `https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`;
};

const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
  imgUrl: getImgURL(ownProps.person),
});

const mapDispatchToProps = dispatch => ({
  onClick: data => dispatch(clickPersonCard(data)),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonCard);

export default PersonCardContainer;
