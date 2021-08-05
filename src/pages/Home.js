import React from "react";
import Photos from "../components/Photos";
import { useAppContext } from "../context/context";
import Navbar from "../components/Navbar";

const Home = () => {
  const { photos, loading } = useAppContext();

  return (
    <main>
      <Navbar />
      <Photos photos={photos} loading={loading} />
    </main>
  );
};

export default Home;
