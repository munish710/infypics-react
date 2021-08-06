import React from "react";
import error_404 from "../assets/error_404.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <img src={error_404} alt="error page" className="error-image" />
      <Link to="/" className="error-btn">
        Go Back
      </Link>
    </section>
  );
};

export default Error;
