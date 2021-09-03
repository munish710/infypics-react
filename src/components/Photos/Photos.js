import React from "react";
import { useAppContext } from "../../context/context";
import Loading from "../Loading/Loading";
import Photo from "../Photo/Photo";
import "./photos.css";

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
