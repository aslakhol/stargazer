import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { clickPersonCard, pressEnterPersonCard } from '../actions/multiActions';

// this should probably be somewhere else with time.
const getImgURL = (person) => {
  const id = person.url.replace('https://swapi.co/api/people/', '').replace('/', '');
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
};

const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
  imgUrl: getImgURL(ownProps.person),
});

const mapDispatchToProps = dispatch => ({
  onClick: data => dispatch(clickPersonCard(data)),
  handleKeyPress: (event, data) => dispatch(pressEnterPersonCard(event, data)),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonCard);

export default PersonCardContainer;
