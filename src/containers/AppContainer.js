import { connect } from 'react-redux';
import App from '../components/App';
import { fetchPersonsIfNeeded } from '../actions/actions';

const mapStateToProps = state => ({
  query: state.personsByQuery.query,
  persons: state.personsByQuery.persons,
  isFetching: state.personsByQuery.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPersonsIfNeeded: data => dispatch(fetchPersonsIfNeeded(data)),
});

const AppContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(App);

export default AppContainer;
