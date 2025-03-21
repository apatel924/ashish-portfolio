// src/components/Header.js
import React from "react";

const Header = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const nameStyle = {
    fontSize: "3rem",
    margin: 0,
    color: "#e6f1ff",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    margin: 0,
    color: "#64ffda",
  };

  const paragraphStyle = {
    maxWidth: "600px",
    color: "#a8b2d1",
    lineHeight: 1.5,
  };

  return (
    <div style={containerStyle}>
      <h1 style={nameStyle}>Ashish Patel</h1>
      <h2 style={titleStyle}>Full Stack Web Developer</h2>
      <p style={paragraphStyle}>
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
    </div>
  );
};

export default Header;
