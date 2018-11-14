import React, { Component } from 'react';
import {
  Collapse, Button, ListGroupItem, ListGroup,
} from 'reactstrap';

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: [],
    };
  }

  componentDidMount() {
    const url = 'http://it2810-06.idi.ntnu.no/api/api/search';
    fetch(url)
      .then(response => response.json())
      .then((d) => {
        this.setState({ searches: d });
        console.log('state', this.state.searches);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>HISTORY</Button>
        <ListGroup>
          {this.state.searches.map((search, id) => (
            <ListGroupItem key={`${search.search_string}${id}`}>
              {search.search_string}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}


export default SearchHistory;
