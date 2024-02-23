import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
};

export default Home;
