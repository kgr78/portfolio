import React from "react";
import "../css/home.css";
import { useTypingEffect } from "../hooks/typing-effect";

const Home = () => {
  const { typedText, typingComplete } = useTypingEffect(
    "Kahu Griffins Portfolio",
    100
  );

  return (
    <div className="App">
      {typingComplete && (
        <img
          className="ImageAnimation"
          src="/images/home_image1.png"
          alt="Floating"
        />
      )}
      {typedText}
    </div>
  );
};

export default Home;