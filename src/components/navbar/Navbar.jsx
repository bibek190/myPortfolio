import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        B
        <span>
          <i class="fa-solid fa-code"></i>
        </span>
      </div>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <div className="desktopMenuBtn">
        <button className="lightDarkMode">
          <i class="fa-solid fa-sun"></i>
        </button>
        <button className="desktopMenuButton">
          Contact
          <span>
            <i class="fa-regular fa-message"></i>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
