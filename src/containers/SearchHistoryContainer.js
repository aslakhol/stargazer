import { connect } from 'react-redux';

import SearchHistory from '../components/SearchHistory';
import { clickHistoryButton } from '../actions/multiActions';
import { fetchPersonsIfNeeded } from '../actions/searchActions';

const mapStateToProps = state => ({
  queries: state.request.result,
  isOpen: state.history.isOpen,
  searches: state.history.result,
});

const mapDispatchToProps = dispatch => ({
  showHistory: () => dispatch(clickHistoryButton()),
  clickHistoryItem: query => dispatch(fetchPersonsIfNeeded(query)),
});

const SearchHistoryContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchHistory);

export default SearchHistoryContainer;
