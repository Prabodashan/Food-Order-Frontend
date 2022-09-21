import React from "react";

import "./Styles/Search.css";

const Search = () => {
  return (
    <section class="search-form-container">
      <form action="">
        <input
          type="search"
          name=""
          placeholder="search here..."
          id="search-box"
        />
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </section>
  );
};

export default Search;
