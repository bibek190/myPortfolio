import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-container">
        <div className="left-container">
          <img src="./images/about.png" alt="" className="about-image" />
        </div>
        <div className="right-content">
          Greetings! I am a highly skilled and dedicated frontend developer with
          a proven ability to craft compelling user interfaces using a powerful
          combination of HTML, CSS, React, and JavaScript. My passion lies in
          transforming design concepts into seamless, interactive, and visually
          appealing digital experiences.Highly skilled and detail-oriented
          Front-End Developer with a proven track record in creating dynamic and
          responsive web applications using React.js. Proficient with a passion
          for crafting engaging user interfaces.
        </div>
      </div>
    </section>
  );
};

export default About;
