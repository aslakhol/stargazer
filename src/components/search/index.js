import React, { Component } from 'react';

const url = "https://swapi.co/api/people?search=";


export default class Search extends Component {

  state = {
    query: "",
    people: [],
  };

  getInfo = () => {
    fetch(`${url}${this.state.query}`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          people: data.results
        })
      });
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
    })
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Søk på diverse her!"
          aria-describedby="basic-addon2"
          ref={input => this.search = input}
          onChange={this.handleChange}
        />
        {this.state.people.map(person => (
        <h2>
          {person.name}
        </h2>
        ))}
      </div>
    )
  }
}

