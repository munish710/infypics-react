import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useAppContext } from "../context/context";

const ImageViewer = () => {
  const { showImageViewer, setShowImageViewer, photos, currentImageIndex } =
    useAppContext();
  const [displayIndex, setDispalyIndex] = useState(0);

  useEffect(() => {
    setDispalyIndex(currentImageIndex);
  }, [currentImageIndex]);

  const [imageUrl, setImageUrl] = useState(photos[displayIndex].urls.regular);

  const prevImage = () => {
    console.log("prev");
    let prevIndex = displayIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = photos.length - 1;
    }
    setDispalyIndex(prevIndex);
  };

  const nextImage = () => {
    let nextIndex = displayIndex + 1;
    if (nextIndex === photos.length) {
      nextIndex = 0;
    }
    setDispalyIndex(nextIndex);
  };

  useEffect(() => {
    setImageUrl(photos[displayIndex].urls.regular);
  }, [displayIndex, photos]);

  return (
    <div
      className={`${
        showImageViewer
          ? "image-viewer-overlay show-image-viewer"
          : "image-viewer-overlay"
      }`}
    >
      <div className="image-display-container">
        <div className="image-header">
          <button
            className="close-btn"
            onClick={() => setShowImageViewer(false)}
          >
            <CgClose />
          </button>
        </div>
        <div className="image-display">
          <div className="image-btns-container">
            <button className="image-btns" onClick={prevImage}>
              <BsChevronLeft />
            </button>
          </div>

          <article className="image-box">
            <img src={imageUrl} className="current-image" alt="infypic" />
          </article>
          <div className="image-btns-container">
            <button className="image-btns" onClick={nextImage}>
              <BsChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
