import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import MyProjects from "../components/MyProjects/MyProjects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ScrollToTop />
      <MyProjects />
    </div>
  );
};

export default Home;
