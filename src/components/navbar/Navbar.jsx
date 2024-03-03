import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <Link to="/" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="/about" className="desktopMenuListItem">
          About
        </Link>
        <Link to="/skills" className="desktopMenuListItem">
          Skills
        </Link>
        <Link to="/myprojects" className="desktopMenuListItem">
          Projects
        </Link>
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
