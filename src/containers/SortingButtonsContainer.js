import { connect } from 'react-redux';

import { onSortPress } from '../actions/multiActions';
import SortingButtons from '../components/SortingButtons';

const mapStateToProps = state => ({
  sortBy: state.sort.sortBy,
});

const mapDispatchToProps = dispatch => ({
  onPress: selected => dispatch(onSortPress(selected)),
});

const SortingButtonsContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(SortingButtons);

export default SortingButtonsContainer;
