import React from "react";
// import { ExternalLink } from "lucide-react";
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
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #233554",
    borderRadius: "4px",
  };

  const periodStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#8892b0",
    marginRight: "20px",
    minWidth: "120px",
  };

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

  const techListStyle = {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <div style={cardStyle}>
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
        </div>
        {positions && positions.length > 0 && (
          <div style={{ fontSize: "0.9rem", color: "#8892b0" }}>
            {positions.join(" | ")}
          </div>
        )}
        <p style={descriptionStyle}>{description}</p>
        <div style={techListStyle}>
          {technologies.map((tech, i) => (
            <div key={i} style={{ marginRight: "10px", marginBottom: "10px" }}>
              <TechBadge>{tech}</TechBadge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
