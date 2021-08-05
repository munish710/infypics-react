import React from "react";
import SearchForm from "../components/SearchForm";
import Photos from "../components/Photos";
import { useAppContext } from "../context/context";

const Explore = () => {
  const { query, handleSubmit, setQuery, photos, loading } = useAppContext();

  return (
    <div>
      <SearchForm
        query={query}
        handleSubmit={handleSubmit}
        setQuery={setQuery}
      />
      <Photos photos={photos} loading={loading} />
    </div>
  );
};

export default Explore;
