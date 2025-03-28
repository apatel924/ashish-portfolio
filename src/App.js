import React, { useState, useEffect } from "react";
import Header, {
  linkedinImg,
  nameStyle,
  titleStyle,
} from "./components/LeftSideBar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import DocumentModal from "./components/DocumentModal";
// import "./App.css"; // Import the CSS file

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [showResume, setShowResume] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);

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

  const mobileHeaderStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px",
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "24px",
  };

  const imageStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #64ffda",
  };

  const docLinkStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#e6f1ff",
    cursor: "pointer",
    transition: "color 0.3s",
    textTransform: "uppercase",
    marginRight: "24px",
  };

  const handleHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div style={containerStyle}>
      <div style={layoutStyle}>
        {!isMobile && <Header />}
        {isMobile && (
          <div style={mobileHeaderStyle}>
            <div style={profileStyle}>
              <img src={linkedinImg} alt="Ashish Patel" style={imageStyle} />
              <div>
                <h1 style={nameStyle}>Ashish Patel</h1>
                <h2 style={titleStyle}>Full Stack Web Developer</h2>
              </div>
            </div>
            <div style={{ marginBottom: "24px" }}>
              <span
                style={docLinkStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                onClick={() => setShowResume(true)}
              >
                Resume
              </span>
              <span
                style={docLinkStyle}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                onClick={() => setShowDiploma(true)}
              >
                Certification
              </span>
            </div>
          </div>
        )}
        <main style={contentStyle} id="content">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>

      {/* Document Modals */}
      <DocumentModal
        src={showResume ? "/path-to-your-resume.pdf" : null}
        onClose={() => setShowResume(false)}
      />
      <DocumentModal
        src={showDiploma ? "/path-to-your-diploma.pdf" : null}
        onClose={() => setShowDiploma(false)}
      />
    </div>
  );
}

export default App;
