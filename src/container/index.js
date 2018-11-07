import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
} from 'reactstrap';
import Search from "./components/search/index"
import { fetchPersons } from './actions/index';

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, newQuery } = this.props;
    dispatch(fetchPersons(newQuery));
  }
  
  handleChange(newQuery) {
    this.props.dispatch(fetchPersons(newQuery));
  }

  render() {
    const { newQuery, items, isFetching } = this.props

    return (
      <div>
        <Container>
          <Search value={newQuery} onChange={this.handleChange} />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
