import React from "react";
import Photo from "./Photo";
import Loader from "react-loader-spinner";

function Photos({ photos, loading }) {
  return (
    <section className="photos">
      <div className="photos-center">
        {photos.map((photo, index) => {
          return <Photo key={index} {...photo} />;
        })}
        {loading && (
          <Loader
            type="Oval"
            color="#617e98"
            height={80}
            width={80}
            className="loading"
          />
        )}
      </div>
    </section>
  );
}

export default Photos;
