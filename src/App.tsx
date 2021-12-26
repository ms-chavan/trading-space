import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from './pages/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Services } from './pages/services/Services';
import { AboutUs } from './pages/about-us/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
