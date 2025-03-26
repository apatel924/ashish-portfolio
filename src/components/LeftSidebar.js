// src/components/LeftSidebar.js
import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import DocumentModal from "./DocumentModal";

function LeftSidebar() {
  // State for PDF modals
  const [showResume, setShowResume] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);

  // Existing container style
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    padding: "80px 60px",
    boxSizing: "border-box",
  };

  const nameStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
    lineHeight: 1.2,
  };

  const titleStyle = {
    fontSize: "1.75rem",
    color: "#64ffda",
    margin: "16px 0 24px 0",
    lineHeight: 1.3,
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#a8b2d1",
    maxWidth: "360px",
    lineHeight: 1.6,
    marginBottom: "40px",
  };

  // Nav container
  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "40px",
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

  // Hover effect
  const handleNavHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };
  const handleNavHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  // Large text links for resume/diploma
  const docLinkStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#e6f1ff",
    cursor: "pointer",
    transition: "color 0.3s",
    textTransform: "uppercase",
  };
  const handleDocHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };
  const handleDocHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>Ashish Patel</h1>
      <h2 style={titleStyle}>Full Stack Web Developer</h2>
      <p style={paragraphStyle}>
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      {/* Existing nav links for About, Experience, Projects */}
      <nav style={navStyle}>
        <a
          style={navLinkStyle}
          onMouseEnter={handleNavHoverEnter}
          onMouseLeave={handleNavHoverLeave}
          href="#about"
        >
          About
        </a>
        <a
          style={navLinkStyle}
          onMouseEnter={handleNavHoverEnter}
          onMouseLeave={handleNavHoverLeave}
          href="#experience"
        >
          Experience
        </a>
        <a
          style={navLinkStyle}
          onMouseEnter={handleNavHoverEnter}
          onMouseLeave={handleNavHoverLeave}
          href="#projects"
        >
          Projects
        </a>
      </nav>

      {/* Add 2 large text links for PDF popups */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <span
          style={docLinkStyle}
          onMouseEnter={handleDocHoverEnter}
          onMouseLeave={handleDocHoverLeave}
          onClick={() => setShowResume(true)}
        >
          Resume
        </span>
        <span
          style={docLinkStyle}
          onMouseEnter={handleDocHoverEnter}
          onMouseLeave={handleDocHoverLeave}
          onClick={() => setShowDiploma(true)}
        >
          Certification
        </span>
      </div>

      {/* Social links at bottom */}
      <div style={{ marginTop: "auto", marginBottom: "40px" }}>
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
    </div>
  );
}

export default LeftSidebar;
