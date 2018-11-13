import React, { Component } from 'react';
import {
  Collapse, Button, ListGroupItem, ListGroup,
} from 'reactstrap';

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}> History </Button>
        <Collapse isOpen={this.state.collapse}>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Collapse>
      </div>
    );
  }
}


export default SearchHistory;
