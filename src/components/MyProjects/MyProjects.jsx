import React from "react";
import "./MyProjects.css";
import { Link, NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyProjects = () => {
  return (
    <section className="myProjects">
      <h2 className="myProject-title">My Projects</h2>
      <div className="project-container">
        <div className="project-box ">
          <img src="./images/digital-library.png" alt="" />
          <div className="project-content">
            <h4>Digital Library</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="https://github.com/bibek190/Digital-Books-Library">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/e-commerce.png" alt="" />
          <div className="project-content">
            <h4>E-commerce</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="https://github.com/bibek190/second-ecommerce">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/travel-bag.png" alt="" />
          <div className="project-content">
            <h4>Travel list</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="https://github.com/bibek190/travel-baggage-list">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/movie-search.png" alt="" />
          <div className="project-content">
            <h4>Search Movie</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="https://github.com/bibek190/Movie-search-react">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
