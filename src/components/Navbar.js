import React, { useState } from "react";
import { GrLogin, GrHome, GrSearch, GrLogout, GrCamera } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
//Logo----------Home, Explore, Favorites, --------Login/Logout

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

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
            <a className="nav-link">
              <span className="generic-icon">
                <GrHome />
              </span>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link">
              <span className="generic-icon">
                <GrSearch />
              </span>
              Explore
            </a>
          </li>
          <li>
            <a className="nav-link">
              <span className="generic-icon">
                <FcLike />
              </span>
              Wishlist
            </a>
          </li>
        </ul>

        <div className={showNavLinks ? "nav-footer show" : "nav-footer"}>
          <a className="nav-link">
            <span className="generic-icon">
              <GrLogout />
            </span>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
