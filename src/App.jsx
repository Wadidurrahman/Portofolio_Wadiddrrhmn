import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import Landingpage from "./assets/pages/Landingpage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
