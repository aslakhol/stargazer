import React from 'react';
import {
  Collapse, Button, ListGroupItem, ListGroup,
} from 'reactstrap';

const SearchHistory = (props) => {
  const {
    onClickButton,
  } = props;

  return (
    <div>
      <Button onClick={() => onClickButton()}>HISTORY</Button>
    </div>
  );
};

export default SearchHistory;
