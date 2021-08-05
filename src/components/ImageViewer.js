import React from "react";
import { CgClose } from "react-icons/cg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImageViewer = () => {
  return (
    <div className="overlay">
      <div className="image-display-container">
        <div className="image-header">
          <h3>name</h3>
          <button className="close-btn">
            <CgClose />
          </button>
        </div>
        <div className="image-display">
          <div className="image-btns-container">
            <button className="image-btns">
              <BsChevronLeft />
            </button>
          </div>

          <article className="image-box"></article>
          <div className="image-btns-container">
            <button className="image-btns">
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
