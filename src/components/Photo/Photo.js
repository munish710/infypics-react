import React from "react";
import { useAppContext } from "../../context/context";
import { FaRegBookmark } from "react-icons/fa";
import "./photo.css";

const Photo = ({ id, urls, alt_description, likes, user, links, index }) => {
  const { openImageViewer, saveImageinDB } = useAppContext();

  const saveImage = () => {
    const imageData = {
      imageID: id,
      imageUrl: urls.regular,
      postedByUrl: user.portfolio_url,
      postedByImageUrl: user.profile_image.medium,
      postedByName: user.first_name,
      downloadUrl: links.download,
    };
    saveImageinDB(imageData);
  };
  return (
    <article className="photo">
      <img
        src={urls.regular}
        alt={alt_description}
        onClick={() => openImageViewer(index)}
        loading="lazy"
      />
      <div className="photo-info">
        <div>
          <h4>{user.name}</h4>
          <p>{likes} likes</p>
        </div>
        <button className="generic-icon bookmark" onClick={saveImage}>
          <FaRegBookmark />
        </button>
      </div>
    </article>
  );
};

export default Photo;
