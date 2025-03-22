import React from "react";
// import Image from "import image here";
import { ExternalLink, Star } from "lucide-react";
import TechBadge from "./TechBadge";

function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
  stars,
  downloads,
  year,
}) {
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    padding: "20px",
    border: "1px solid #233554",
    borderRadius: "4px",
  };

  const contentStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const imageContainerStyle = {
    flexShrink: 0,
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
      <div style={contentStyle}>
        {year && (
          <div style={{ fontSize: "0.9rem", color: "#8892b0" }}>{year}</div>
        )}
        <div style={titleStyle}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e6f1ff", textDecoration: "none" }}
          >
            {title}
          </a>
          <ExternalLink
            style={{ marginLeft: "5px", width: "16px", height: "16px" }}
          />
        </div>
        {description && <p style={descriptionStyle}>{description}</p>}
        {technologies && (
          <div style={techListStyle}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={{ marginRight: "10px", marginBottom: "10px" }}
              >
                <TechBadge>{tech}</TechBadge>
              </div>
            ))}
          </div>
        )}
        {stars && (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              color: "#8892b0",
              fontSize: "0.9rem",
            }}
          >
            <Star
              style={{
                width: "16px",
                height: "16px",
                color: "#64ffda",
                marginRight: "5px",
              }}
            />
            {stars}
          </div>
        )}
        {downloads && (
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              color: "#8892b0",
              fontSize: "0.9rem",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "16px", height: "16px", marginRight: "5px" }}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {downloads}
          </div>
        )}
      </div>
      <div style={imageContainerStyle}>
        {/* <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={120}
          style={{
            borderRadius: "4px",
            border: "1px solid rgba(75,85,99,0.5)",
          }}
        /> */}
      </div>
    </div>
  );
}

export default ProjectCard;
