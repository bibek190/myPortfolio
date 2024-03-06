import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        B
        <span>
          <i class="fa-solid fa-code"></i>
        </span>
      </div>
      <ul className="desktopMenu">
        <li>
          <Link to="/" className="desktopMenuListItem">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/about" className="desktopMenuListItem">
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" className="desktopMenuListItem">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/myprojects" className="desktopMenuListItem">
            Projects
          </Link>
        </li>
      </ul>

      <div className="desktopMenuBtn">
        <DarkMode />
        <button className="desktopMenuButton contactLink">
          <Link className="contactLink" to="/contact">
            Contact Me
          </Link>
        </button>
      </div>
      {/* mobile */}

      {showMenu ? (
        <FaTimes className="mobMenu " onClick={() => setShowMenu(!showMenu)} />
      ) : (
        <GiHamburgerMenu
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}

      <ul className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <li>
          <Link to="/" className="listItem" onClick={() => setShowMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="/about"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/myprojects"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </li>
        <FaTimes className="react-icons" />
      </ul>
    </nav>
  );
};

export default Navbar;
