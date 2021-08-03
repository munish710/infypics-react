import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm({ handleSubmit, query, setQuery }) {
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
