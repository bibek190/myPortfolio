import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    {
      linkTo: "/",
      name: "Home",
    },
    {
      linkTo: "/about",
      name: "About",
    },
    {
      linkTo: "/skills",
      name: "Skills",
    },
    {
      linkTo: "/myprojects",
      name: "Projects",
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        B
        <span>
          <i class="fa-solid fa-code"></i>
        </span>
      </div>
      <ul className="desktopMenu">
        {links.map(({ linkTo, name }) => {
          return (
            <li>
              <Link to={linkTo} className="desktopMenuListItem">
                {name}
              </Link>
            </li>
          );
        })}
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
        {links.map(({ linkTo, name }) => {
          return (
            <li>
              <Link
                to={linkTo}
                className="listItem"
                onClick={() => setShowMenu(false)}
              >
                {name}
              </Link>
            </li>
          );
        })}
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
