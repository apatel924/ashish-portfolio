import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function SocialLinks({ vertical = false }) {
  const containerStyle = {
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    alignItems: "center",
    gap: vertical ? "31px" : "26px",
  };

  const linkStyle = {
    color: "#8892b0",
    fontSize: "20rem", // Increased font size
    transition: "color 0.3s, transform 0.3s",
  };

  // On hover: bigger + white
  const handleMouseEnter = (e) => {
    e.target.style.color = "#ffffff";
    e.target.style.transform = "scale(1.15)";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "#8892b0";
    e.target.style.transform = "scale(1)";
  };

  const socialLinks = [
    {
      icon: <Github style={{ width: "31px", height: "31px" }} />, // Increased by 10%
      href: "https://github.com/apatel924",
      label: "GitHub",
    },
    {
      icon: <Linkedin style={{ width: "31px", height: "31px" }} />, // Increased by 10%
      href: "https://www.linkedin.com/in/ashish-patel-0b13a2219",
      label: "LinkedIn",
    },
    {
      icon: <Mail style={{ width: "31px", height: "31px" }} />, // Increased by 10%
      href: "mailto:a.patel38@hotmail.com",
      label: "Email",
    },
  ];

  return (
    <div style={containerStyle}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link.label}
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
      {/* No vertical line in horizontal mode */}
      {/* If vertical, we could show a line, but vertical={false} => horizontal alignment */}
    </div>
  );
}

export default SocialLinks;
