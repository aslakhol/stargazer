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
    showHistory,
    isOpen,
    searches,
    clickHistoryItem,
  } = props;

  return (
    <div className="mx-auto">
      <Row>
        <Button color="primary" onClick={() => showHistory()} className="mx-auto">HISTORY</Button>
      </Row>
      <Row>
        <ListGroup className="my-3">
          {isOpen
            && searches.slice(0, SEARCH_HISTORY_ENTRIES).map(search => (
              <ListGroupItem
                key={search.id}
                onClick={() => clickHistoryItem(search.search_string)}
                style={{ minWidth: '95px', textAlign: 'center' }}
              >
                <span>{search.search_string}</span>
              </ListGroupItem>
            ))
          }
        </ListGroup>
      </Row>
    </div>
  );
};

export default SearchHistory;
