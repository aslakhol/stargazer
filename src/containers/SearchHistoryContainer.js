import { connect } from 'react-redux';

import SearchHistory from '../components/SearchHistory';
import { fetchHistory } from '../actions/searchHistoryAction';

const mapStateToProps = state => ({
  queries: state.request.result,
});

const mapDispatchToProps = dispatch => ({
  onHistoryButtonClick: () => dispatch(fetchHistory()),
});

const SearchHistoryContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchHistory);

export default SearchHistoryContainer;
