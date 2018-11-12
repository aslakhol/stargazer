import React from 'react';

const Search = (props) => {
  const { onChange } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a character!"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
