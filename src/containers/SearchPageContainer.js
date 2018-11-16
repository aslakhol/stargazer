import { connect } from 'react-redux';

import SearchPage from '../components/SearchPage';

const mapStateToProps = state => ({
  persons: state.request.result,
});

const SearchPageContainer = connect(
  mapStateToProps,
)(SearchPage);

export default SearchPageContainer;
