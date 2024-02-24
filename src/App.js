import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import MyProjects from "./pages/MyProjects";
import Skills from "./pages/Skills";
import NoPage from "./pages/NoPage";
import "./App.css";
import About from "./components/About/About";

const App = () => {
  return (
    <BrowserRouter>
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
