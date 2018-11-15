import React from 'react';
import {
  Button,
} from 'reactstrap';

const SearchHistory = (props) => {
  const {
    onClickButton,
    isOpen,
  } = props;

  return (
    <div>
      <Button onClick={() => onClickButton()}>HISTORY</Button>
      <div>
        {
        isOpen && <h1>he</h1>
      }
      </div>
    </div>
  );
};

export default SearchHistory;
