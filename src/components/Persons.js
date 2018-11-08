import React, { Component } from 'react';

export default class Persons extends Component {
  render() {
    return (
      <ul>
        {this.props.persons.map((persons, i) => (
          <li key={i}>{persons.title}</li>
        ))}
      </ul>
    );
  }
}
