import React from "react";
import "./MyProjects.css";

const MyProjects = () => {
  return (
    <section className="myProjects">
      <h2>My Projects</h2>
      <div className="project-container">
        <div className="individual-project">
          <img
            src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?height=640&width=640&fit=bounds"
            alt=""
          />
          <div className="project-content">
            <h3>My 1st project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quam maxime obcaecati quis magnam a consequatur, provident ex
              eveniet dolor!
            </p>
          </div>
        </div>
        <div className="individual-project">
          <img
            src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?height=640&width=640&fit=bounds"
            alt=""
          />
        </div>
        <div className="individual-project">
          <img
            src="https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?height=640&width=640&fit=bounds"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
