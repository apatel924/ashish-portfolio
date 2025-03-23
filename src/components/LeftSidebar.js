import React from "react";
import SocialLinks from "./SocialLinks";
import linkedinImg from "../images/linkedin-img.jpeg";

function LeftSidebar() {
  // Container for the entire left column
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    padding: "80px 100px",
    boxSizing: "border-box",
  };

  // Large name
  const nameStyle = {
    fontSize: "5rem",
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
    lineHeight: 1.2,
    marginBottom: "40px", // Added spacing
  };

  // Profile image
  const imageStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    marginTop: "20px",
    marginBottom: "40px", // Increased spacing
    border: "2px solid #64ffda",
  };

  // Sub-title
  const titleStyle = {
    fontSize: "1.75rem",
    color: "#64ffda",
    margin: "16px 0 40px 0", // Increased bottom margin
    lineHeight: 1.3,
  };

  // Short paragraph
  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#a8b2d1",
    maxWidth: "400px",
    lineHeight: 1.6,
    marginBottom: "60px", // Increased spacing
  };

  // Nav container
  const navStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "24px", // Increased gap between nav items
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
    transition: "all 0.3s ease",
    boxShadow: "none",
  };

  const dashHoverStyle = {
    width: "30px",
    height: "2px",
    backgroundColor: "#64ffda",
    boxShadow: "0 0 8px #64ffda",
  };

  const navLinkStyle = {
    fontSize: "1rem",
    color: "#e6f1ff",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "color 0.3s",
  };

  // Hover effect for nav links and dash
  const handleLinkMouseEnter = (e) => {
    e.target.style.color = "#64ffda";
    // Find the previous sibling (dash) and apply hover styles
    const dash = e.target.parentElement.querySelector("div");
    Object.assign(dash.style, dashHoverStyle);
  };

  const handleLinkMouseLeave = (e) => {
    e.target.style.color = "#e6f1ff";
    // Reset dash styles
    const dash = e.target.parentElement.querySelector("div");
    Object.assign(dash.style, dashStyle);
  };

  // Social icons pinned at bottom, horizontally aligned
  const socialContainerStyle = {
    marginTop: "60px", // Increased spacing
  };

  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>Ashish Patel</h1>
      <img src={linkedinImg} alt="Ashish Patel" style={imageStyle} />
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
