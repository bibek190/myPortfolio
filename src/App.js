import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import "./App.css";
import About from "./components/About/About";
import MyProjects from "./components/MyProjects/MyProjects";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
