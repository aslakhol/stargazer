import React from 'react';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="teeext"
        onChange={e => onChange(e.target.value)}
        value={value}
      />

    </div>
  );
};

export default Search;
