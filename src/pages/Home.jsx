import React from "react";
import Hero from "../components/hero/Hero";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import MyProjects from "../components/MyProjects/MyProjects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ScrollToTop />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
