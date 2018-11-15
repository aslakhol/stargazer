import { connect } from 'react-redux';

import PageSelect from '../components/PageSelect';
import { clickGoToPage, clickGoToNextPage, clickGoToPrevPage } from '../actions/multiActions';

const mapStateToProps = state => ({
  pageCount: Math.max(Math.ceil(state.request.count / 4), 1),
  count: state.request.count,
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  goToPage: pageNum => dispatch(clickGoToPage(pageNum)),
  nextPage: () => dispatch(clickGoToNextPage()),
  prevPage: () => dispatch(clickGoToPrevPage()),
});

const PageSelectContainer = connect(
  mapStateToProps, mapDispatchToProps,
)(PageSelect);

export default PageSelectContainer;
