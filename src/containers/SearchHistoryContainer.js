import { connect } from 'react-redux';

import SearchHistory from '../components/SearchHistory';
import { clickHistoryButton } from '../actions/multiActions';

const mapStateToProps = state => ({
  queries: state.request.result,
  isOpen: state.history.isOpen,
  searches: state.history.result,
});

const mapDispatchToProps = dispatch => ({
  onClickButton: () => dispatch(clickHistoryButton()),
});

const SearchHistoryContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchHistory);

export default SearchHistoryContainer;
