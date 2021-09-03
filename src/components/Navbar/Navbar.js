import React, { useState } from "react";
import { GrLogin, GrHome, GrSearch, GrLogout, GrCamera } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./navbar.css";

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="nav-center section">
        <div className="nav-header">
          <div className="logo">
            <span className="generic-icon">
              <GrCamera />
            </span>
            InfyPics
          </div>
          <div className="button-wrapper">
            <button
              className="nav-toggle"
              onClick={() => setShowNavLinks(!showNavLinks)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        <ul
          className={`${showNavLinks ? "nav-links show-links" : "nav-links"}`}
        >
          <li>
            <Link
              className="nav-link"
              to="/"
              onClick={() => setShowNavLinks(false)}
            >
              <span className="generic-icon">
                <GrHome />
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/explore"
              onClick={() => setShowNavLinks(false)}
            >
              <span className="generic-icon">
                <GrSearch />
              </span>
              Explore
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/wishlist"
              onClick={() => setShowNavLinks(false)}
            >
              <span className="generic-icon">
                <FaRegBookmark />
              </span>
              Saved
            </Link>
          </li>
        </ul>

        <div className={showNavLinks ? "nav-footer show" : "nav-footer"}>
          {user ? (
            <button
              className="nav-link nav-btn"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span className="generic-icon">
                <GrLogout />
              </span>
              Logout
            </button>
          ) : (
            <button className="nav-link nav-btn" onClick={loginWithRedirect}>
              <span className="generic-icon">
                <GrLogin />
              </span>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
