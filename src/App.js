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

  const handleHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div
      style={{
        backgroundColor: "#0a192f",
        color: "#e6f1ff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "0 auto",
          padding: isMobile ? "0" : "0 32px", // Increased padding
        }}
      >
        {!isMobile && <Header />}
        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "32px 24px", // Increased padding
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px", // Increased gap
                marginBottom: "32px", // Increased margin
              }}
            >
              <img
                src={linkedinImg}
                alt="Ashish Patel"
                style={{
                  width: "250px", // Increased size
                  height: "250px", // Increased size
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #64ffda", // Increased border width
                }}
              />
              <div>
                <h1 style={{ ...nameStyle, fontSize: "6rem" }}>Ashish Patel</h1>
                <h2 style={{ ...titleStyle, fontSize: "1.8rem" }}>
                  Full Stack Web Developer
                </h2>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "1.4rem", // Increased font size
                  fontWeight: "bold",
                  color: "#e6f1ff",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  textTransform: "uppercase",
                  marginRight: "32px", // Increased margin
                }}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                onClick={() => setShowResume(true)}
              >
                Resume
              </span>
              <span
                style={{
                  fontSize: "1.4rem", // Increased font size
                  fontWeight: "bold",
                  color: "#e6f1ff",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  textTransform: "uppercase",
                  marginRight: "32px", // Increased margin
                }}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                onClick={() => setShowDiploma(true)}
              >
                Certification
              </span>
            </div>
          </div>
        )}
        <main
          style={{
            width: isMobile ? "100%" : "50%",
            padding: isMobile ? "32px 24px" : "120px 140px 32px 0px", // Increased padding
          }}
          id="content"
        >
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>

      {/* Document Modals */}
      <DocumentModal
        src={showResume ? "/docs/Ashish Patel Resume.pdf" : null}
        onClose={() => setShowResume(false)}
      />
      <DocumentModal
        src={
          showDiploma
            ? "/docs/Ashish Patel DIPLOMA April 28, 2023 (1).pdf"
            : null
        }
        onClose={() => setShowDiploma(false)}
      />
    </div>
  );
}

export default App;
