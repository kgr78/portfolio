import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Navbar from "./components/Navbar";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light" : "dark"}>
        <React.Fragment>
          <Navbar />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Projects' element={<Projects />} />
            </Routes>
          </Router>
        </React.Fragment>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
