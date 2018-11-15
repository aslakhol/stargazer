import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const FilterButtons = (props) => {
  const { onCheck, filter } = props;
  const filterOptions = ['Male', 'Female', 'Hermaphrodite', 'N/A'];
  return (
    <ButtonGroup>
      {filterOptions.map(option => (
        <Button color="primary" onClick={() => onCheck(option)} active={!filter.includes(option)} key={option}>{option}</Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
