import { connect } from 'react-redux';
import renderPersonInfo from '../components/PersonInfo';

const mapStateToProps = (state, ownProps) => ({
  person: ownProps.person,
});

const PersonCardContainer = connect(
  mapStateToProps,
)(renderPersonInfo);

export default PersonCardContainer;
