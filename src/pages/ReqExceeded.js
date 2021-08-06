import React from "react";
import warning from "../assets/warning.svg";

const ReqExceeded = () => {
  return (
    <section className="empty-images">
      <img src={warning} alt="empty box" className="empty-img" />
      <div className="info">
        <h3>API Requests Excceded</h3>
        <h4>Try again after 1 hour</h4>
      </div>
    </section>
  );
};

export default ReqExceeded;
