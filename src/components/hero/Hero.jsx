import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey I'm Bibek</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Frontend</span>
            <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            laudantium? Sint accusamus repudiandae eos repellendus, fugit dolore
            dignissimos exercitationem
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            laudantium ad nobis!
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero-section-image">
        <img src="./images/portfolio.png" alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
