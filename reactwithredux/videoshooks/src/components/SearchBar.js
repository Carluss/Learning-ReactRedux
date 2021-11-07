import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, defaultSearch }) => {
  const [term, setTerm] = useState(defaultSearch);

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            onChange={(event) => setTerm(event.target.value)}
            type="text"
            value={term}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
