import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
