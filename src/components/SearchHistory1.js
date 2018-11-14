import React from 'react';
import {
  Collapse, Button, ListGroupItem, ListGroup,
} from 'reactstrap';


const SearchHistory = (props) => {
  const {
    history,
  } = props;


  return (

    <div>
      <Button>HISTORY</Button>
      <Collapse>
        <ListGroup>
          {history.map((search, id) => (
            <ListGroupItem>
              {search.search_string}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default SearchHistory;
