import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <label>Search</label>
      <input
        id="search-input"
        name="search"
        type="text"
        placeholder="Search any product..."
        value={props.searchWord}
        onChange={props.handleInputChange}
      />
      <input
        id="on-stock-checkbox"
        type="checkbox"
        onChange={props.updateShowStocked}
        checked={props.showStockedProducts}
      />
      <label htmlFor="on-stock-checkbox">Only show products on stock</label>
    </form>
  );
}

export default SearchBar;
