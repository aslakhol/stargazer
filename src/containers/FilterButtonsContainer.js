import { connect } from 'react-redux';

import { onFilterCheck } from '../actions/multiActions';
import FilterButtons from '../components/FilterButtons';

const mapStateToProps = state => ({
  persons: state.request.result,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onCheck: selected => dispatch(onFilterCheck(selected)),
});

const FilterButtonsContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(FilterButtons);

export default FilterButtonsContainer;
