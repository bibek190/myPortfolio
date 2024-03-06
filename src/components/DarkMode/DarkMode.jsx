import React, { useEffect, useState } from "react";
import "./DarkMode.css";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

const DarkMode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button className="lightDarkMode" onClick={() => toggleTheme()}>
        {theme === "light-theme" ? <CiSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default DarkMode;
