import React, { useEffect } from "react";
import SavedPhoto from "../components/SavedPhoto/SavedPhoto";
import { useAppContext } from "../context/context";
import empty_images from "../assets/empty_images.svg";

const Wishlist = () => {
  const { savedImages, getSavedImages } = useAppContext();

  useEffect(() => {
    getSavedImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      {savedImages.length > 0 ? (
        <section className="photos">
          <div className="saved-photos-center">
            {savedImages.map((image) => {
              return <SavedPhoto {...image} key={image.imageID} />;
            })}
          </div>
        </section>
      ) : (
        <section className="section empty-images">
          <img src={empty_images} alt="empty box" className="empty-img" />
          <h3>no saved images</h3>
        </section>
      )}
    </main>
  );
};

export default Wishlist;
