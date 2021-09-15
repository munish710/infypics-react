import React, { useRef, useEffect } from "react";
import { useAppContext } from "../../context/context";
import { FaSearch } from "react-icons/fa";
import "./searchform.css";

function SearchForm() {
  const { query, handleSubmit, setQuery } = useAppContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <button type="submit" className="submit-btn">
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
