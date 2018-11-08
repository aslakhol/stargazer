import React from 'react';
import { connect } from 'react-redux';
import Search from "../components/search/index"
import { fetchItems } from '../actions/index'
import Results from '../components/results'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, newQuery } = this.props;
    dispatch(fetchItems(newQuery));
  }

  handleChange(newQuery) {
    this.props.dispatch(fetchItems(newQuery));
  }

  render() {
    const { newQuery, items, isFetching } = this.props

    return (
      <div>
        <Search value={newQuery} onChange={this.handleChange} />
        <Results items={items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { newQuery, itemsByQuery } = state;
  const { isFetching, items } = itemsByQuery[newQuery] || {
    newQuery,
    isFetching: true,
    items: [],
  };

  return {
    newQuery,
    items,
    isFetching,
  };
}

export default connect(mapStateToProps)(App);
