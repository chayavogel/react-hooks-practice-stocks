import React from "react";

function SearchBar( { setSortBy, sortBy, setFilterBy } ) {

  function handleSortMethod(e) {
    setSortBy(e.target.value)
  }

  function handleFilterMethod(e) {
    setFilterBy(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy==="Alphabetically"}
          onChange={handleSortMethod}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy==="Price"}
          onChange={handleSortMethod}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterMethod}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
