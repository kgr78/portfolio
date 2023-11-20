import React, { useContext } from "react";
import "../css/home.css";
import { useTypingEffect } from "../hooks/typing-effect";
import { ThemeContext } from "../App";

const Home = () => {
  const { typedText } = useTypingEffect(
    "Kahu Griffin's Portfolio",
    100,
    2000
  );

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "light" ? "light-bg" : "dark-bg"}`}>
      <img
        className="ImageAnimation"
        src="/images/home_image1.png"
        alt="Floating"
      />
      {typedText}
    </div>
  );
};

export default Home;
