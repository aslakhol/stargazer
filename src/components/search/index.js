import React from "react";


const Search = (props) => {
  const {value, onChange } = props;

  return(
    <div className="input">
      <input 
        type="text"
        placeholder="SEARCH!"
        onChange={e => onChange(e.target.value)}
        value={value}
      />
    </div>
  )
}

export default Search;