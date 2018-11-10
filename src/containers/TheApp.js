import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchPersonsIfNeeded,
} from '../actions/actions';
import Search from '../components/Search';
import Person from '../components/Person';

class TheApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedPerson } = this.props;
    dispatch(fetchPersonsIfNeeded(selectedPerson));
  }

  handleChange(query) {
    this.props.dispatch(fetchPersonsIfNeeded(query));
  }


  render() {
    const {
      query, items, isFetching,
    } = this.props;
    return (
      <div>
        <header>
          TITLE
          <Search value={query} onChange={this.handleChange} />
        </header>
        <div>
          {isFetching && items.length === 0
          && <h2>Loading</h2>}

          {!isFetching && items.length === 0
          && <h2>No results</h2> }

          {items.length > 0
          && <Person items={items} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { query, personsByQuery } = state;
  const { isFetching, items } = personsByQuery[query] || {
    query,
    isFetching: true,
    items: [],
  };
  return {
    query,
    items,
    isFetching,
  };
};

export default connect(mapStateToProps)(TheApp);
