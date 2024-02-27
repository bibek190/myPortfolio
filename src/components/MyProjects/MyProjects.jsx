import React from "react";
import "./MyProjects.css";
import { Link, NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyProjects = () => {
  return (
    <section className="myProjects">
      <h2>My Projects</h2>
      <div className="project-container">
        <div className="project-box ">
          <img src="./images/project1.jpeg" alt="" />
          <div className="project-content">
            <h4>Project1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="#">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/project2.jpeg" alt="" />
          <div className="project-content">
            <h4>Project1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="#">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/project3.jpeg" alt="" />
          <div className="project-content">
            <h4>Project1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="#">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/project4.jpeg" alt="" />
          <div className="project-content">
            <h4>Project1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              voluptate beatae dolorem commodi. Repellat ut voluptatibus magnam
              at harum.
            </p>
            <NavLink to="#">
              <FaExternalLinkAlt />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
