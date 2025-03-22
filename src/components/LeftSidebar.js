// src/LeftSidebar.js
import React from "react";
import SocialLinks from "./SocialLinks";

function LeftSidebar() {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "60px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const nameStyle = {
    fontSize: "4rem",
    margin: 0,
    color: "#ffffff",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#64ffda",
    margin: "10px 0 30px 0",
  };

  const bioStyle = {
    fontSize: "1.2rem",
    color: "#a8b2d1",
    maxWidth: "250px",
    lineHeight: 1.4,
    margin: "0 auto",
  };

  const navStyle = {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const dashStyle = {
    borderLeft: "2px dashed #8892b0",
    height: "16px",
    marginRight: "8px",
  };

  const linkStyle = {
    fontSize: "1.2rem",
    color: "#e6f1ff",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  const handleLinkHover = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleLinkLeave = (e) => {
    e.target.style.color = "#e6f1ff";
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={nameStyle}>Ashish Patel</h1>
        <h2 style={titleStyle}>Full Stack Web Developer</h2>
        <p style={bioStyle}>
          I build accessible, pixel‑perfect digital experiences for the web.
        </p>
        <div style={navStyle}>
          <div style={linkContainerStyle}>
            <div style={dashStyle} />
            <a
              href="#about"
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              About Me
            </a>
          </div>
          <div style={linkContainerStyle}>
            <div style={dashStyle} />
            <a
              href="#experience"
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Experience
            </a>
          </div>
          <div style={linkContainerStyle}>
            <div style={dashStyle} />
            <a
              href="#projects"
              style={linkStyle}
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Projects
            </a>
          </div>
        </div>
      </div>
      <div>
        <SocialLinks vertical={true} />
      </div>
    </div>
  );
}

export default LeftSidebar;
