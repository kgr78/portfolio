import React, { useContext } from "react";
import "../css/about.css";
import { ThemeContext } from "../App";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme === "light" ? "light-bg" : "dark-bg"}`}>
      <div className="row-1">
        <div className="col-md-6">
          <h1>A Little About Me</h1>
          <h5>
            Greetings! I'm Kahu, the mind behind this website, where I showcase my diverse skills so that you will hopefully hire me
            (or just be impressed).
            I'm a 20-year-old Maori, currently in my third year of studying computer science at the University of Canterbury.
            My roots trace back to Wanaka, New Zealand, and I proudly belong to the Ngati Porou iwi. Beyond academics,
            I'm passionate about fitness, sports, surfing, and running, which fill my spare moments with joy.
          </h5>
        </div>
        <div className="col-6 text-center">
          <h1>Me</h1>
          <div className="round-image-container">
            <img
                className="round-image"
                src="/images/profile_pic.jpg"
                alt="Floating"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>
  );
};

export default About;
