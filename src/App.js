// App.js
import React from "react";
import LeftSidebar from "./LeftSidebar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

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

  const leftStyle = {
    width: "50%",
    height: "100vh",
    overflow: "hidden",
  };

  const rightStyle = {
    width: "50%",
    height: "100vh",
    overflowY: "auto",
    padding: "40px",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <LeftSidebar />
      </div>
      <div style={rightStyle}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
