import React from "react";
import SavedPhoto from "../components/SavedPhoto";
import { useAppContext } from "../context/context";

const Wishlist = () => {
  const { savedImages } = useAppContext();
  return (
    <main>
      <section className="photos">
        <div className="saved-photos-center">
          {savedImages.map((image) => {
            return <SavedPhoto {...image} key={image.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
