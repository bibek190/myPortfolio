import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Bibek</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am passionate for translating creative ideas into captivating
          digital experience.
        </p>
        <Link className="btn-link">
          <button className="btn">
            <span>
              <i class="fa-solid fa-download"></i>
            </span>
            Download CV
          </button>
        </Link>
      </div>
      <div>
        <img src={"./images/portfolio.png"} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Hero;
