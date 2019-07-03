import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control ds-input"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBar;
