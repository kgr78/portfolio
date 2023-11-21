import React, { useContext } from "react";
import "../css/about.css";
import { ThemeContext } from "../App";
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

function CustomButton({ onClick, children }) {
  const { theme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "light" ? "#cc4949" : "#fafaeb",
    color: theme === "light" ? "#fafaeb" : "#cc4949",
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main ${theme === "light" ? "light-bg" : "dark-bg"}`}>
      <div className="row-1">
        <div className="col-md-6">
          <h2>A Little About Me</h2>
          <h5>
            Greetings! I'm Kahu, the mind behind this website, where I showcase my diverse skills so that you will hopefully hire me
            (or just be impressed).
            I'm a 20-year-old Maori, currently in my third year of studying computer science at the University of Canterbury.
            I grew up Wanaka, New Zealand, and I proudly belong to the Ngati Porou iwi. Beyond academics,
            I'm passionate about fitness, sports, surfing, and running, which fill my spare moments with joy.
          </h5>
          <CustomButton>
            Click to see more about Past Jobs
          </CustomButton>
        </div>
        <div className="col-md-6">
          <div className="round-image-container">
            
            <img
                className="round-image"
                src="/images/profile_pic.jpg"
                alt="Floating"
            />
          </div>
        </div>
      </div>
      {/* <div className="row-3">
        <h2>Past Jobs</h2>
      </div>
      <div className="row-2">
        <div className="col-md-6">
          <h2>Francesca's Wanaka / Kitchen Hand</h2>
          <h6>- Francesca's Italian Kitchen Wanaka,  93 Ardmore Street</h6>
          <h5>
            I worked full-time at Francesca's Wanaka working roughly 50 hours a week. 
            This would be many different things in the kitchen such as cooking pizza, dishes, prepping food, and cooking food. 
            I worked with a large team and customers a lot, as I had to interact and have good communication and timing to ensure orders went out. 
            I had to take on many hours as I worked some weeks over the summer period working some weeks up to 60 hours. 
          </h5>
        </div>
        
        <div className="col-md-6">
          <h2>Trout Wanaka / Kitchen Hand</h2>
          <h6>- 151 Ardmore Street, Wānaka 9305</h6>
          <h5>
            I worked full time at Trout Wanaka working roughly 30 to 40 hours a week. 
            This was doing dish washing and cleaning over the busy summer period.
            I worked predominantly in the kitchen doing a range of jobs that helped the kitchen team stay on time. 
          </h5>
        </div>
      </div> */}
    </div>
  );
};

export default About;
