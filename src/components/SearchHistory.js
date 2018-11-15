import React from 'react';
import {
  Button, ListGroup,
} from 'reactstrap';
import QueryInHistory from './QueryInHistory';

const SearchHistory = (props) => {
  const {
    onClickButton,
    isOpen,
  } = props;

  return (
    <div>
      <Button onClick={() => onClickButton()}>HISTORY</Button>
      <ListGroup>
        {
        isOpen && <QueryInHistory />
      }
      </ListGroup>
    </div>
  );
};

export default SearchHistory;
