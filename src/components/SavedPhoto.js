import React from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useAppContext } from "../context/context";
import { useSnackbar } from "react-simple-snackbar/dist";
import { options } from "../utils/options";

const SavedPhoto = ({ id, urls, user, links }) => {
  const { removeSavedImage } = useAppContext();
  const [openSnackbar] = useSnackbar(options);
  const deleteImage = () => {
    openSnackbar("Image removed!");
    removeSavedImage(id);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(urls.full);
    openSnackbar("Copied to Clipboard successfully!");
  };

  return (
    <article class="saved-photo">
      <div className="saved-photo-header">
        <a href={user.portfolio_url} target="_blank" className="user-info">
          <img src={user.profile_image.medium} className="user-img" />
          <h4>{user.first_name}</h4>
        </a>
        <button className="close-btn-2" onClick={deleteImage}>
          <CgClose />
        </button>
      </div>

      <img src={urls.regular} />
      <div className="saved-photo-footer">
        <button className="link-btn" onClick={copyLink}>
          <span className="link-btn-icon">
            <HiOutlineLink />
          </span>
          Copy Link
        </button>
        <a href={links.download} target="_blank" className="link-btn">
          <span className="link-btn-icon">
            <AiOutlineArrowDown />
          </span>
          Download
        </a>
      </div>
    </article>
  );
};

export default SavedPhoto;
