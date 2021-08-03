import React from "react";
import SearchForm from "./components/SearchForm";
import Photos from "./components/Photos";
import { useAppContext } from "./context/context";

function App() {
  const { query, handleSubmit, setQuery, photos, loading } = useAppContext();

  return (
    <main>
      <SearchForm
        query={query}
        handleSubmit={handleSubmit}
        setQuery={setQuery}
      />
      <Photos photos={photos} loading={loading} />
    </main>
  );
}

export default App;
