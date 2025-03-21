// src/components/Nav.js
import React from "react";

const Nav = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#112240",
    padding: "20px",
    position: "sticky", // optional if you want it to stick
    top: 0,
    zIndex: 999,
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "#e6f1ff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <a href="#hero" style={linkStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" style={linkStyle}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
