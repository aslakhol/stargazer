import React, { Component } from 'react';
import {
  Collapse, Button, ListGroupItem, ListGroup,
} from 'reactstrap';

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      searches: [],
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>HISTORY</Button>
        <Collapse isOpen={this.state.collapse}>
          <ListGroup>
            {this.state.searches.map((search, id) => (
              <ListGroupItem key={`${search.search_string}${id}`}>
                {search.search_string}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Collapse>
      </div>
    );
  }
}


export default SearchHistory;
