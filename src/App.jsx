import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import Landingpage from "./assets/pages/Landingpage";
import Home from "./assets/pages/Home";
import AboutMe from "./assets/pages/AboutMe";
import Projects from "./assets/pages/Projects";
import Experience from "./assets/pages/Experience";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
