import { useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import { ThemeContext } from "../App";


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

function Navbar() {
  const navRef = useRef();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <CustomButton onClick={toggleTheme}>
        {capitalizeFirstLetter(theme)} Mode
      </CustomButton>
      <nav ref={navRef} className={theme === "light" ? "light" : "dark"}>
        <a href="/#">Home</a>
        <a href="/projects">My Projects</a>
        <a href="/about">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
