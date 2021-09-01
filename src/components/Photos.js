import React from "react";
import { useAppContext } from "../context/context";
import Loading from "./Loading";
import Photo from "./Photo";

function Photos() {
  const { photos, loading } = useAppContext();

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
