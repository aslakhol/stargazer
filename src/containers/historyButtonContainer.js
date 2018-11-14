import { connect } from 'react-redux';
import SearchHistory from '../components/SearchHistory';
import { clickHistoryButton } from '../actions/multiActions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  onClick: dispatch(clickHistoryButton()),
});

const historyButtonContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchHistory);

export default historyButtonContainer;
