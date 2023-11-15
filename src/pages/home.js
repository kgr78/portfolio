// Update your component (Home.js) to include a container around text and image
import React from "react";
import "../css/home.css";
import { useTypingEffect } from "../hooks/typing-effect";

const Home = () => {
  const { typedText } = useTypingEffect(
    "Kahu Griffin's Portfolio",
    100,
    2000
  );

  return (
    <div className="App">
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
