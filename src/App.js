import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './components/Card.js';
import Modal from './components/Modal.js';

import { simpleAction } from './actions/simpleAction'

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <div className="col-md-3 mb-3">
          <Card />
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
