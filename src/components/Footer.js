import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const containerStyle = {
    marginTop: "40px",
  };

  const linksStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "#8892b0",
    fontSize: "22px",
    transition: "color 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#e6f1ff";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#8892b0";
  };

  return (
    <footer style={containerStyle}>
      <div style={linksStyle}>
        <a
          href="https://github.com/github"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-patel-0b13a2219"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
