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
  // Base card style with transitions for hover effect
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #233554",
    borderRadius: "4px",
    transition: "transform 0.3s, box-shadow 0.3s",
    position: "relative", // so we can manipulate the container
  };

  // Hover event handlers for the container
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(100,255,218,0.1)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  // Left column: period
  const periodStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#8892b0",
    marginRight: "20px",
    minWidth: "120px",
  };

  // Right column: content
  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#e6f1ff",
    margin: "8px 0",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#a8b2d1",
    lineHeight: 1.5,
  };

  // Link icon style (if you want the ExternalLink to glow on hover)
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
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
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
          <div style={{ fontSize: "0.9rem", color: "#8892b0" }}>
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
