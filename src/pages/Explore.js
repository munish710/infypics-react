import React from "react";
import SearchForm from "../components/SearchForm";
import Photos from "../components/Photos";
import { useAppContext } from "../context/context";
import Navbar from "../components/Navbar";

const Explore = () => {
  const { query, handleSubmit, setQuery, photos, loading } = useAppContext();

  return (
    <div>
      <Navbar />
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
