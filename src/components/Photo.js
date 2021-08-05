import React from "react";
import { useAppContext } from "../context/context";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  index,
}) => {
  const { openImageViewer } = useAppContext();
  return (
    <article className="photo" onClick={() => openImageViewer(index)}>
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
