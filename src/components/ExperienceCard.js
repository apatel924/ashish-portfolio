// ExperienceCard.js
import React from "react";
import { ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";

function ExperienceCard({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
  positions,
}) {
  // Default style: no border or background
  const cardStyle = {
    position: "relative",
    marginBottom: "48px", // Increased bottom margin between cards
    display: "flex",
    gap: "100px", // Increased gap between date and content
    padding: "8px", // Added some padding
    borderRadius: "4px",
    width: "100%", // Take up full width
    maxWidth: "1200px", // Increased max width
    transition:
      "transform 0.3s, box-shadow 0.3s, background-color 0.3s, border 0.3s",
    // No border or background color by default
  };

  // Hover event handlers
  const handleMouseEnter = (e) => {
    // Subtle border + background color on hover
    e.currentTarget.style.border = "1px solid #233554";
    e.currentTarget.style.backgroundColor = "rgba(100,255,218,0.03)";
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(100,255,218,0.1)";
  };
  const handleMouseLeave = (e) => {
    // Revert to default
    e.currentTarget.style.border = "none";
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  // Period column
  const periodStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#8892b0",
    minWidth: "140px",
    paddingTop: "8px", // Align with title
  };

  // Content column
  const contentStyle = {
    flex: 1,
    maxWidth: "1000px", // Increased max-width
  };

  const titleStyle = {
    fontSize: "30px", // Increased font size
    fontWeight: "500",
    color: "#e6f1ff", // Lighter color for better contrast
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const descriptionStyle = {
    fontSize: "20px", // Increased font size
    color: "#a8b2d1", // Lighter gray for better readability
    lineHeight: "1.7", // Increased line height
    marginTop: "24px",
    marginBottom: "24px",
  };

  // External link icon
  const linkIconStyle = {
    marginLeft: "5px",
    width: "16px",
    height: "16px",
    color: "#8892b0",
    transition: "color 0.3s, transform 0.3s",
    cursor: "pointer",
  };
  const handleIconMouseEnter = (e) => {
    e.target.style.color = "#64ffda";
    e.target.style.transform = "scale(1.2)";
  };
  const handleIconMouseLeave = (e) => {
    e.target.style.color = "#8892b0";
    e.target.style.transform = "scale(1)";
  };

  const techListStyle = {
    marginTop: "24px",
    display: "flex",
    flexWrap: "wrap",
    gap: "16px", // Increased gap between tech badges
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={periodStyle}>{period}</div>
      <div style={contentStyle}>
        <div style={titleStyle}>
          {title} @{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64ffda", textDecoration: "none" }}
          >
            {company}
          </a>
          {/* External link icon (optional) */}
          <ExternalLink
            style={linkIconStyle}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
          />
        </div>
        {positions && positions.length > 0 && (
          <div
            style={{
              fontSize: "16px",
              color: "#8892b0",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            {positions.join(" | ")}
          </div>
        )}
        <p style={descriptionStyle}>{description}</p>
        <div style={techListStyle}>
          {technologies.map((tech, i) => (
            <TechBadge key={i}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
