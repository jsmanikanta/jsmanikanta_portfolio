import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pageOffset">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
