import React from "react";
import "./ScrollToTop.css";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollonTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scrollToTop" onClick={scrollonTop}>
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTop;
