// src/App.js
import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const containerStyle = {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#0a192f",
    color: "#e6f1ff",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  // Left side: 50% width
  const leftStyle = {
    width: "50%",
  };

  // Right side: 50% width
  const rightStyle = {
    width: "50%",
    padding: "60px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      {/* Left half */}
      <div style={leftStyle}>
        <LeftSidebar />
      </div>

      {/* Right half */}
      <div style={rightStyle}>
        <AboutSection />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
