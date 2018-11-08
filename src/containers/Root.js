import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectPerson,
  fetchPersonsIfNeeded,
} from '../actions/actions';
import Picker from '../components/Picker';
import Persons from '../components/Persons';

class theApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedPerson } = this.props;
    dispatch(fetchPersonsIfNeeded(selectedPerson));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPerson !== prevProps.selectedPerson) {
      const { dispatch, selectedPerson } = this.props;
      dispatch(fetchPersonsIfNeeded(selectedPerson));
    }
  }

  handleChange(nextPerson) {
    this.props.dispatch(selectPerson(nextPerson));
    this.props.dispatch(fetchPersonsIfNeeded);
  }

  render() {
    const {
      selectedPerson, persons, isFetching, lastUpdated,
    } = this.props;
    return (
      <div>
        <Picker
          value={selectedPerson}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at
              {' '}
              {new Date(lastUpdated).toLocaleDateString()}
.
              {' '}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && persons.length === 0 && <h2>Loading...</h2>}
        {!isFetching && persons.length === 0 && <h2>Empty.</h2>}
        {persons.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Persons persons={persons} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedPerson, personByPersons } = state;
  const { isFetching, lastUpdated, items: persons } = personByPersons[
    selectedPerson
  ] || {
    isFetching: true,
    items: [],
  };
  return {
    selectedPerson,
    persons,
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(theApp);
