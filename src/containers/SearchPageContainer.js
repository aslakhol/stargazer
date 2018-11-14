// The intention is that this component will generate cards and hold buttons for pagination.
import { connect } from 'react-redux';

import SearchPage from '../components/SearchPage';

const mapStateToProps = state => ({
  persons: state.request.result,
});

const mapDispatchToProps = () => ({
});

const SearchPageContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SearchPage);

export default SearchPageContainer;
