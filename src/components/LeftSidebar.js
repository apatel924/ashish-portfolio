// LeftSidebar.js
import React from "react";
import SocialLinks from "./SocialLinks";

function LeftSidebar() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "60px 20px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const topStyle = {
    marginTop: "20px",
  };

  const nameStyle = {
    fontSize: "5rem", // very large name
    fontWeight: "bold",
    margin: 0,
    color: "#ffffff",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    color: "#64ffda",
    margin: "20px 0",
  };

  const bioStyle = {
    fontSize: "1.25rem",
    color: "#a8b2d1",
    maxWidth: "300px",
    margin: "0 auto",
  };

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
  };

  const dashStyle = {
    borderLeft: "2px dashed #8892b0",
    height: "20px",
    marginRight: "10px",
  };

  const navLinkStyle = {
    fontSize: "1.5rem",
    color: "#e6f1ff",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const socialStyle = {
    marginBottom: "20px",
  };

  const handleLinkMouseEnter = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleLinkMouseLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div style={containerStyle}>
      <div style={topStyle}>
        <h1 style={nameStyle}>Ashish Patel</h1>
        <h2 style={titleStyle}>Full Stack Web Developer</h2>
        <p style={bioStyle}>
          I build accessible, pixel‑perfect digital experiences for the web.
        </p>
        <nav>
          <div style={navItemStyle}>
            <div style={dashStyle} />
            <a
              href="#about"
              style={navLinkStyle}
              onMouseEnter={handleLinkMouseEnter}
              onMouseLeave={handleLinkMouseLeave}
            >
              About Me
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
      </div>
      <div style={socialStyle}>
        <SocialLinks vertical />
      </div>
    </div>
  );
}

export default LeftSidebar;
