import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { clickPersonCard, pressEnterPersonCard } from '../actions/multiActions';
import { getImgURL } from '../utils/urlUtil';

const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
  imgUrl: getImgURL(ownProps.person.id),
});

const mapDispatchToProps = dispatch => ({
  onClick: data => dispatch(clickPersonCard(data)),
  handleKeyPress: (event, data) => dispatch(pressEnterPersonCard(event, data)),
});

const PersonCardContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PersonCard);

export default PersonCardContainer;
