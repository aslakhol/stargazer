import React from 'react';
import {
  Button, ListGroup, ListGroupItem,
} from 'reactstrap';

const SearchHistory = (props) => {
  const {
    onClickButton,
    isOpen,
    result,
  } = props;

  return (
    <div>
      <Button onClick={() => onClickButton()}>HISTORY</Button>
      <ListGroup>
        {
        isOpen && <ListGroupItem>{JSON.stringify(result)}</ListGroupItem>
      }
      </ListGroup>
    </div>
  );
};

export default SearchHistory;
