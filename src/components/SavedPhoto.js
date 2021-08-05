import React from "react";
import { CgClose } from "react-icons/cg";
import { HiOutlineLink } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
const SavedPhoto = ({ urls, user, links }) => {
  console.log(user);
  return (
    <article class="saved-photo">
      <div className="saved-photo-header">
        <a href={user.portfolio_url} target="_blank" className="user-info">
          <img src={user.profile_image.medium} className="user-img" />
          <h4>{user.first_name}</h4>
        </a>
        <button className="close-btn-2">
          <CgClose />
        </button>
      </div>

      <img src={urls.regular} />
      <div className="saved-photo-footer">
        <button className="link-btn">
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

{
  /* <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div> */
}

export default SavedPhoto;
