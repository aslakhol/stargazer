import React, { Component } from 'react';

export default class Search extends Component {

  token = null;
  state = {
    query: "",
    people: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    })
    this.search(value);
  }

  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Søk på diverse her!"
          aria-describedby="basic-addon2"
          onChange={this.onChange}
        />
        {JSON.stringify(this.state.people)}
      </div>
    )
  }
}

