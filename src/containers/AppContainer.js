import { connect } from 'react-redux';
import App from '../components/App';
import { fetchPersonsIfNeeded } from '../actions/searchActions';

const mapStateToProps = state => ({
  query: state.request.query,
  persons: state.request.result,
  isFetching: state.request.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPersonsIfNeeded: data => dispatch(fetchPersonsIfNeeded(data)),
});

const AppContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(App);

export default AppContainer;
