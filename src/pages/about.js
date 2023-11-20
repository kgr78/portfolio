import React, { useContext } from "react";
import "../css/about.css";
import { ThemeContext } from "../App";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "light" ? "light-bg" : "dark-bg"}`}>
        <h2>Coming Soon</h2>
    </div>
  );
};

export default About;
