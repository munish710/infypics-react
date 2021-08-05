import React from "react";
import Photos from "../components/Photos";
import { useAppContext } from "../context/context";

const Home = () => {
  const { photos, loading } = useAppContext();

  return (
    <main>
      <Photos photos={photos} loading={loading} />
    </main>
  );
};

export default Home;
