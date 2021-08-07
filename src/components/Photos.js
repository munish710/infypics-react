import React from "react";
import Loading from "./Loading";
import Photo from "./Photo";

function Photos({ photos, loading }) {
  return (
    <section className="photos">
      <div className="photos-center">
        {photos.map((photo, index) => {
          return <Photo key={index} {...photo} index={index} />;
        })}
        {loading && <Loading />}
      </div>
    </section>
  );
}

export default Photos;
