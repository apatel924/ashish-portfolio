// src/components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    marginTop: "60px",
    textAlign: "center",
  };

  const linksStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
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
    <footer style={footerStyle}>
      <div style={linksStyle}>
        <a
          href="https://github.com/your-github"
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
        {/* Add more icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
