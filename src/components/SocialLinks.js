import React from "react";
import { Github, Linkedin, Codepen, Instagram, BookOpen } from "lucide-react";

function SocialLinks({ vertical = false }) {
  const containerStyle = {
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    alignItems: "center",
    gap: vertical ? "24px" : "20px",
  };

  const linkStyle = {
    color: "#8892b0",
    fontSize: "1.5rem",
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

  // ~24px icons
  const socialLinks = [
    {
      icon: <Github style={{ width: "24px", height: "24px" }} />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin style={{ width: "24px", height: "24px" }} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Codepen style={{ width: "24px", height: "24px" }} />,
      href: "https://codepen.io",
      label: "CodePen",
    },
    {
      icon: <Instagram style={{ width: "24px", height: "24px" }} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <BookOpen style={{ width: "24px", height: "24px" }} />,
      href: "https://goodreads.com",
      label: "Goodreads",
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
