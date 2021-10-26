import React from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useAppContext } from "../../context/context";
import { useSnackbar } from "react-simple-snackbar";
import { options } from "../../utils/options";
import "./savedphoto.css";

const SavedPhoto = ({
  imageID,
  imageUrl,
  postedByUrl,
  postedByImageUrl,
  postedByName,
  downloadUrl,
}) => {
  const { removeSavedImage, downloadImage } = useAppContext();
  const [openSnackbar] = useSnackbar(options);
  const deleteImage = () => {
    // openSnackbar("Image removed successfully!");
    removeSavedImage(imageID);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(imageUrl);
    openSnackbar("Copied to Clipboard successfully!");
  };

  return (
    <article className="saved-photo">
      <div className="saved-photo-header">
        <a
          href={postedByUrl}
          target="_blank"
          className="user-info"
          rel="noopener noreferrer"
        >
          <img
            src={postedByImageUrl}
            className="user-img"
            alt="profile"
            loading="lazy"
          />
          <h4>{postedByName}</h4>
        </a>
        <button className="close-btn-2" onClick={deleteImage}>
          <CgClose />
        </button>
      </div>

      <img src={imageUrl} alt="scenery" />
      <div className="saved-photo-footer">
        <button className="link-btn" onClick={copyLink}>
          <span className="link-btn-icon">
            <HiOutlineLink />
          </span>
          Copy Link
        </button>
        <button className="link-btn" onClick={() => downloadImage(imageUrl)}>
          <span className="link-btn-icon">
            <AiOutlineArrowDown />
          </span>
          Download
        </button>
      </div>
    </article>
  );
};

export default SavedPhoto;
