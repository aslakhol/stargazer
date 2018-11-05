import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from "./components/search/index.js";
import { simpleAction } from './actions/simpleAction';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-3 mb-3">
          <Search />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
