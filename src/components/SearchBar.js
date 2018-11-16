import React from 'react';
import {
  Input,
  InputGroup,
} from 'reactstrap';

const SearchBar = (props) => {
  const { onChange } = props;

  return (
    <InputGroup>
      <Input placeholder="Search for a character!" onChange={e => onChange(e.target.value)} autoFocus />
    </InputGroup>
  );
};

export default SearchBar;
