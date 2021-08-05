import React from "react";
import ImageViewer from "../components/ImageViewer";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  return (
    <main>
      <Navbar />
      <section className="section">
        <h2>Wishlist comp</h2>
      </section>
      <ImageViewer />
    </main>
  );
};

export default Wishlist;
