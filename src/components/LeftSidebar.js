import React from "react";
import SocialLinks from "./SocialLinks";

function LeftSidebar() {
  // Container for the entire left column
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    padding: "80px 60px",
    boxSizing: "border-box",
  };

  // Large name
  const nameStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
    lineHeight: 1.2,
  };

  // Sub-title
  const titleStyle = {
    fontSize: "1.75rem",
    color: "#64ffda",
    margin: "16px 0 24px 0",
    lineHeight: 1.3,
  };

  // Short paragraph
  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#a8b2d1",
    maxWidth: "400px",
    lineHeight: 1.6,
    marginBottom: "40px",
  };

  // Nav container
  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "auto", // pushes social links to bottom
  };

  // Each nav item: subtle dash + label
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  const dashStyle = {
    width: "20px",
    height: "1px",
    backgroundColor: "#8892b0",
    marginRight: "10px",
  };

  const navLinkStyle = {
    fontSize: "0.9rem",
    color: "#e6f1ff",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "color 0.3s",
  };

  // Hover effect for nav links
  const handleLinkMouseEnter = (e) => {
    e.target.style.color = "#64ffda";
  };
  const handleLinkMouseLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  // Social icons pinned at bottom, horizontally aligned
  const socialContainerStyle = {
    marginTop: "40px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>Ashish Patel</h1>
      <h2 style={titleStyle}>Full Stack Web Developer</h2>
      <p style={paragraphStyle}>
        I build accessible, pixel‑perfect digital experiences for the web.
      </p>

      <nav style={navStyle}>
        <div style={navItemStyle}>
          <div style={dashStyle} />
          <a
            href="#about"
            style={navLinkStyle}
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            About
          </a>
        </div>
        <div style={navItemStyle}>
          <div style={dashStyle} />
          <a
            href="#experience"
            style={navLinkStyle}
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            Experience
          </a>
        </div>
        <div style={navItemStyle}>
          <div style={dashStyle} />
          <a
            href="#projects"
            style={navLinkStyle}
            onMouseEnter={handleLinkMouseEnter}
            onMouseLeave={handleLinkMouseLeave}
          >
            Projects
          </a>
        </div>
      </nav>

      <div style={socialContainerStyle}>
        {/* Social links horizontally */}
        <SocialLinks vertical={false} />
      </div>
    </div>
  );
}

export default LeftSidebar;
