import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#0a192f",
    color: "#e6f1ff",
  };

  // Left (sticky) column
  const sidebarStyle = {
    width: "300px",
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
    height: "100vh",
    backgroundColor: "#112240",
  };

  // Right (main) column
  const mainStyle = {
    flex: 1,
    padding: "40px 60px",
    // If you want the entire browser to scroll, omit overflow here
    // overflow: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <LeftSidebar />
      </div>

      <div style={mainStyle}>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
