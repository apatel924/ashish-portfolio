import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import DocumentModal from "./DocumentModal";

function LeftSidebar() {
  const [showResume, setShowResume] = useState(false);
  const [showCert, setShowCert] = useState(false);

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

  // We'll add a simple style for the two links
  const linkListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "40px",
  };

  const linkStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#e6f1ff",
    cursor: "pointer",
    transition: "color 0.3s",
    textTransform: "uppercase",
  };

  const handleLinkHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };
  const handleLinkHoverLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>Ashish Patel</h1>
      <h2 style={titleStyle}>Full Stack Web Developer</h2>
      <p style={paragraphStyle}>
        I build accessible, pixel‑perfect digital experiences for the web.
      </p>

      {/* Large text links for Resume & Certification */}
      <div style={linkListStyle}>
        <span
          style={linkStyle}
          onMouseEnter={handleLinkHoverEnter}
          onMouseLeave={handleLinkHoverLeave}
          onClick={() => setShowResume(true)}
        >
          Resume
        </span>
        <span
          style={linkStyle}
          onMouseEnter={handleLinkHoverEnter}
          onMouseLeave={handleLinkHoverLeave}
          onClick={() => setShowCert(true)}
        >
          Certification
        </span>
      </div>

      <div style={{ marginTop: "auto", marginBottom: "40px" }}>
        <SocialLinks vertical={false} />
      </div>

      {/* Modals for Resume & Cert */}
      {showResume && (
        <DocumentModal
          docType="pdf"
          src="/docs/Ashish-Resume.pdf" // or wherever your PDF is
          onClose={() => setShowResume(false)}
        />
      )}
      {showCert && (
        <DocumentModal
          docType="image"
          src="/docs/web-dev-certificate.png" // path to your certificate image
          onClose={() => setShowCert(false)}
        />
      )}
    </div>
  );
}

export default LeftSidebar;
