import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Router, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
         
        <Navbar />
 <Router >
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
  </Router>    
    </div>
  );
}

export default App;
