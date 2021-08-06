import React from "react";
import { useAppContext } from "../context/context";
import { FaRegBookmark } from "react-icons/fa";
import { useSnackbar } from "react-simple-snackbar";
import { options } from "../utils/options";

const Photo = ({ id, urls, alt_description, likes, user, links, index }) => {
  const { openImageViewer, setSavedImages, savedImages } = useAppContext();
  const [openSnackbar] = useSnackbar(options);
  const openHandler = () => {
    openSnackbar("Image Saved Successfully");
    const tempImages = [...savedImages];
    const newImage = { id, urls, user, links };
    tempImages.push(newImage);
    setSavedImages([...tempImages]);
  };
  return (
    <article className="photo">
      <img
        src={urls.regular}
        alt={alt_description}
        onClick={() => openImageViewer(index)}
      />
      <div className="photo-info">
        <div>
          <h4>{user.name}</h4>
          <p>{likes} likes</p>
        </div>
        <button className="generic-icon bookmark" onClick={openHandler}>
          <FaRegBookmark />
        </button>
      </div>
    </article>
  );
};

export default Photo;
