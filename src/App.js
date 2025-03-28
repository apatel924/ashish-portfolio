import React, { useState, useEffect } from "react";
import Header from "./components/LeftSidebar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
// import "./App.css"; // Import the CSS file

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    backgroundColor: "#0a192f",
    color: "#e6f1ff",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  const layoutStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: isMobile ? "0" : "0 24px",
  };

  const contentStyle = {
    width: isMobile ? "100%" : "52%",
    padding: isMobile ? "24px 16px" : "24px 0 24px 48px",
  };

  return (
    <div style={containerStyle}>
      <div style={layoutStyle}>
        {!isMobile && <Header />}
        <main style={contentStyle} id="content">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}

export default App;
