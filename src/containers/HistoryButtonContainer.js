import { connect } from 'react-redux';
import SearchHistory from '../components/SearchHistory';
import { clickHistoryButton } from '../actions/multiActions';


const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  onClickButton: () => dispatch(clickHistoryButton()),
});

const HistoryButtonContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchHistory);

export default HistoryButtonContainer;
