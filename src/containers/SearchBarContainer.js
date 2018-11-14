import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { fetchPersonsIfNeeded } from '../actions/searchActions';

const mapStateToProps = state => ({
  persons: state.request.result,
});

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(fetchPersonsIfNeeded(data)),
});

const SearchBarContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
