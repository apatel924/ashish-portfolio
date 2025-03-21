import React from "react";

const LeftSidebar = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    height: "100%", // fill sidebar
    boxSizing: "border-box",
  };

  const nameStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    color: "#64ffda",
    marginBottom: "20px",
  };

  const navStyle = {
    marginTop: "40px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  const liStyle = {
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "#e6f1ff",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      {/* name and title */}
      <div>
        <h1 style={nameStyle}>Ashish Patel</h1>
        <h2 style={titleStyle}>Full Stack Web Developer</h2>
        <p style={{ color: "#a8b2d1", maxWidth: "200px", lineHeight: 1.4 }}>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      {/* Navigation */}
      <div style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="#about" style={linkStyle}>
              About
            </a>
          </li>
          <li style={liStyle}>
            <a href="#experience" style={linkStyle}>
              Experience
            </a>
          </li>
          <li style={liStyle}>
            <a href="#projects" style={linkStyle}>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
