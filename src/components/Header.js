import React from "react";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#0a192f",
    color: "#e6f1ff",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>Ashish Patel</h1>
      <h2>Full Stack Web Developer</h2>
    </header>
  );
};

export default Header;
