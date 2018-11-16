import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const SortButtons = (props) => {
  const { onPress, sortBy } = props;
  const sortOptions = ['Name', 'ID'];
  return (
    <ButtonGroup className="float-right">
      {sortOptions.map(option => (
        <Button
          color="primary"
          onClick={() => onPress(option.toLowerCase())}
          active={sortBy === option.toLowerCase()}
          key={option}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default SortButtons;
