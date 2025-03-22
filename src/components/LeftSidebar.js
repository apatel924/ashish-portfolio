// src/components/LeftSidebar.js
import React from "react";

function LeftSidebar() {
  // Full-height column
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // name/title at top, social links at bottom
    alignItems: "center",
    height: "100vh",
    boxSizing: "border-box",
    padding: "60px",
    textAlign: "center",
  };

  // Big name
  const nameStyle = {
    fontSize: "4rem",
    margin: 0,
  };

  // Big title
  const titleStyle = {
    fontSize: "2rem",
    color: "#64ffda",
    margin: "10px 0 30px",
  };

  // Table of contents
  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const linkStyle = {
    color: "#e6f1ff",
    textDecoration: "none",
    fontSize: "1.2rem",
  };

  const topSectionStyle = {
    // Container for name, title, nav
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Social links at bottom
  const socialLinksStyle = {
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        <h1 style={nameStyle}>Ashish Patel</h1>
        <h2 style={titleStyle}>Full Stack Web Developer</h2>

        <nav style={navStyle}>
          <a href="#about" style={linkStyle}>
            About Me
          </a>
          <a href="#experience" style={linkStyle}>
            Experience
          </a>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </nav>
      </div>

      <div style={socialLinksStyle}>
        {/* Example social links (GitHub, LinkedIn, etc.) */}
        <p style={{ color: "#8892b0" }}>Social Links Here</p>
      </div>
    </div>
  );
}

export default LeftSidebar;
