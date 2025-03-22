import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

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
    overflowY: "auto", // Allow scrolling on entire container
  };

  const leftStyle = {
    width: "43%",
    position: "fixed", // Fix left sidebar in place
    height: "100vh",
    overflow: "hidden",
    paddingLeft: "160px",
  };

  const rightStyle = {
    width: "57%",
    marginLeft: "46%", // Offset by width of fixed left sidebar
    minHeight: "100vh",
    padding: "50px",
    boxSizing: "border-box",
    paddingRight: "160px",
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
