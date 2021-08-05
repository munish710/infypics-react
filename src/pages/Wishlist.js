import React from "react";
import { useAppContext } from "../context/context";

const Wishlist = () => {
  const { savedImages } = useAppContext();
  console.log(savedImages);
  return (
    <main>
      <section className="photos">
        <div className="photos-center">{}</div>
      </section>
    </main>
  );
};

export default Wishlist;
