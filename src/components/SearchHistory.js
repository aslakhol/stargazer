import React from 'react';
import {
  Row,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { SEARCH_HISTORY_ENTRIES } from '../utils/constants';

const SearchHistory = (props) => {
  const {
    onClickButton,
    isOpen,
    searches,
  } = props;

  return (
    <div className="mx-auto">
      <Row>
        <Button color="primary" onClick={() => onClickButton()} className="mx-auto">HISTORY</Button>
      </Row>
      <Row>
        <ListGroup className="my-3">
          {isOpen
            && searches.slice(0, SEARCH_HISTORY_ENTRIES).map(search => (
              <ListGroupItem key={search.id}>{search.search_string}</ListGroupItem>
            ))
          }
        </ListGroup>
      </Row>
    </div>
  );
};

export default SearchHistory;
