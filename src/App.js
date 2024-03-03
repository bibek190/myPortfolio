import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills";
import NoPage from "./pages/NoPage";
import "./App.css";
import About from "./components/About/About";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
