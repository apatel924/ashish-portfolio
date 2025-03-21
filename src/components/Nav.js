import React from "react";

const Nav = () => {
  const navStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    backgroundColor: "#112240",
    padding: "10px",
  };

  const linkStyle = {
    color: "#a8b2d1",
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      <span style={linkStyle}>About</span>
      <span style={linkStyle}>Experience</span>
      <span style={linkStyle}>Projects</span>
    </nav>
  );
};

export default Nav;
