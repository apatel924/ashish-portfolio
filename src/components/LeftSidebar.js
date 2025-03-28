import React, { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import DocumentModal from "./DocumentModal";
import linkedinImg from "../images/linkedin-img.jpeg";

// Create ResumeModal and DiplomaModal components
export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <DocumentModal src="/docs/Ashish Patel Resume.pdf" onClose={onClose} />
  );
};

export const DiplomaModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <DocumentModal
      src="/docs/Ashish Patel DIPLOMA April 28, 2023 (1).pdf"
      onClose={onClose}
    />
  );
};

function Header() {
  // State for PDF modals
  const [showResume, setShowResume] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerStyle = {
    position: isMobile ? "static" : "sticky",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "between",
    width: isMobile ? "100%" : "48%",
    maxHeight: isMobile ? "auto" : "100vh",
    padding: isMobile ? "24px 16px" : "24px 0",
  };

  const profileContainerStyle = {
    marginBottom: "32px",
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

  const nameStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    color: "#64ffda",
    margin: "8px 0 0 0",
  };

  const navStyle = {
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    gap: isMobile ? "24px" : "16px",
    marginBottom: "32px",
  };

  const navLinkStyle = {
    fontSize: "1rem",
    color: "#e6f1ff",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "color 0.3s",
  };

  const docLinksStyle = {
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    gap: isMobile ? "24px" : "16px",
    marginBottom: "32px",
  };

  const docLinkStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#e6f1ff",
    cursor: "pointer",
    transition: "color 0.3s",
    textTransform: "uppercase",
  };

  // Hover effects
  const handleHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  const socialContainerStyle = {
    marginTop: "auto", // Push to bottom when in side layout
  };

  return (
    <header style={headerStyle}>
      <div style={profileContainerStyle}>
        <div style={profileStyle}>
          <img src={linkedinImg} alt="Ashish Patel" style={imageStyle} />
          <div>
            <h1 style={nameStyle}>Ashish Patel</h1>
            <h2 style={titleStyle}>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>

      <nav style={navStyle}>
        <a
          style={navLinkStyle}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          href="#about"
        >
          About
        </a>
        <a
          style={navLinkStyle}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          href="#experience"
        >
          Experience
        </a>
        <a
          style={navLinkStyle}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          href="#project"
        >
          Project
        </a>
      </nav>

      <div style={docLinksStyle}>
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

      <div style={socialContainerStyle}>
        <SocialLinks vertical={false} />
      </div>

      {/* Resume PDF Modal */}
      {showResume && (
        <DocumentModal
          src="/docs/Ashish Patel Resume.pdf"
          onClose={() => setShowResume(false)}
        />
      )}

      {/* Diploma PDF Modal */}
      {showDiploma && (
        <DocumentModal
          src="/docs/Ashish Patel DIPLOMA April 28, 2023 (1).pdf"
          onClose={() => setShowDiploma(false)}
        />
      )}
    </header>
  );
}

// Export the styles and image that App.js needs
export { linkedinImg };
export const nameStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: 0,
  color: "#ffffff",
};

export const titleStyle = {
  fontSize: "1.2rem",
  color: "#64ffda",
  margin: "8px 0 0 0",
};

export default Header;
