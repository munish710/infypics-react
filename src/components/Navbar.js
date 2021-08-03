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
        <div
          className={`${showNavLinks ? "nav-links show-links" : "nav-links"}`}
        >
          <ul>
            <li className="nav-link">
              <span className="generic-icon">
                <GrHome />
              </span>
              Home
            </li>
            <li className="nav-link">
              <span className="generic-icon">
                <GrSearch />
              </span>
              Explore
            </li>
            <li className="nav-link">
              <span className="generic-icon">
                <FcLike />
              </span>
              Wishlist
            </li>
            <li className="nav-link">
              <span className="generic-icon">
                <GrLogout />
              </span>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
