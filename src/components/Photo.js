import React from "react";
import { useAppContext } from "../context/context";
import { FaRegBookmark } from "react-icons/fa";
import { useSnackbar } from "react-simple-snackbar";

const options = {
  position: "bottom-right",
  style: {
    backgroundColor: "#FFFFFF",
    color: "#1a6aa2",
    fontFamily: "Menlo, monospace",
    fontSize: "20px",
    textAlign: "center",
    zIndex: 100,
    marginBottom: "80vh",
  },
  closeStyle: {
    color: "red",
    fontSize: "16px",
  },
};

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
  const [openSnackbar, closeSnackbar] = useSnackbar(options);
  return (
    <article className="photo">
      <img
        src={regular}
        alt={alt_description}
        onClick={() => openImageViewer(index)}
      />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <button
          className="generic-icon bookmark"
          onClick={() => openSnackbar("Image Saved Successfully")}
        >
          {/* <img src={medium} alt={name} className="user-img" /> */}
          <FaRegBookmark />
        </button>
      </div>
    </article>
  );
};

export default Photo;
