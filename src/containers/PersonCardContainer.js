import { connect } from 'react-redux';
import PersonCard from '../components/PersonCard';
import { clickPersonCard } from '../actions/multiActions';
import { IMG_URL_BASE } from '../constants';

const getImgURL = person => `${IMG_URL_BASE}${person.id}.jpg`;

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
