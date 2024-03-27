import React from "react";
import "./MyProjects.css";
import { Link, NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyProjects = () => {
  const projects = [
    {
      img: "./images/digital-library.png",
      name: "Digital Library",
      link: "https://digital-books-library.vercel.app/",
    },
    {
      img: "./images/e-commerce.png",
      name: "E-commerce",
      link: "https://github.com/bibek190/second-ecommerce",
    },
    {
      img: "./images/travel-bag.png",
      name: "Travel-bag",
      link: "https://travel-baggage-list.vercel.app/",
    },
    {
      img: "./images/movie-search.png",
      name: "Movie Search",
      link: "https://github.com/bibek190/Movie-search-react",
    },
  ];
  return (
    <section className="myProjects">
      <h2 className="myProject-title">My Projects</h2>
      <div className="project-container">
        {projects.map(({ img, name, link }) => {
          return (
            <div className="project-box ">
              <img src={img} alt="" />
              <div className="project-content">
                <h4>{name}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  omnis voluptate beatae dolorem commodi. Repellat ut
                  voluptatibus magnam at harum.
                </p>
                <NavLink to={link}>
                  <FaExternalLinkAlt />
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
