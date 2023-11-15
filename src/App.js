
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from "./components/Navbar";
 
function App() {
  return (
    <><React.Fragment>
      <Navbar />
    </React.Fragment><Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router></>
  );
}
 
export default App;
