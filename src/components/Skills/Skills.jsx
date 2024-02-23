import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <span className="skillTitle">What I do ?</span>
      <span className="skillDesc">
        In the realm of dynamic web development, I excel in using React and
        JavaScript. Leveraging the power of React, I create interactive and
        efficient user interfaces, embracing the component-based architecture
        for scalable and maintainable code. My proficiency in JavaScript allows
        me to bring these interfaces to life, providing users with a smooth and
        interactive browsing experience.
      </span>
      <div className="skillLists">
        <div className="skillBars">
          <i class="fa-brands fa-html5 img "></i>
          <div className="skillBarText">
            <h2>HTML5</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBars">
          <i class="fa-brands fa-css3-alt img"></i>
          <div className="skillBarText">
            <h2>CSS 3</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBars">
          <i class="fa-brands fa-js img"></i>
          <div className="skillBarText">
            <h2>Javascript</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBars">
          <i class="fa-brands fa-react img"></i>
          <div className="skillBarText">
            <h2>React</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBars">
          <i class="fa-brands fa-bootstrap img"></i>
          <div className="skillBarText">
            <h2>Bootstrap</h2>
            <p></p>
          </div>
        </div>
        <div className="skillBars">
          <i class="fa-brands fa-github img"></i>
          <div className="skillBarText">
            <h2>Github</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
