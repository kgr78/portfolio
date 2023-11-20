import React, { useContext } from "react";
import "../css/about.css";
import { ThemeContext } from "../App";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "light" ? "light-bg" : "dark-bg"}`}>
        <h2>Updating Current Projects</h2>
    </div>
  );
};

export default Projects;
