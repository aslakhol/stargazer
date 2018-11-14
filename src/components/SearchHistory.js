import React from 'react';
import {
  Button,
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
