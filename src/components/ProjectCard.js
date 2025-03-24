import React from "react";
import { ExternalLink, Star } from "lucide-react";
import TechBadge from "./TechBadge";

function ProjectCard({
  title,
  description,
  images,
  link,
  technologies,
  stars,
  downloads,
  year,
  onImageClick, // callback to open the modal
}) {
  // Card container: flex with stretch alignment so left image container fills vertical space
  const cardStyle = {
    display: "flex",
    marginBottom: "20px",
    border: "none",
    borderRadius: "4px",
    transition: "transform 0.3s, box-shadow 0.3s",
    position: "relative",
    alignItems: "stretch", // Let left container stretch to match right side
  };

  // Subtle hover effect
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(100,255,218,0.1)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  };

  // Left image container: no fixed height; it stretches
  const imageContainerStyle = {
    flexShrink: 0,
    width: "250px", // or any width you prefer
    maxHeight: "360px", // Add max height to prevent overly tall images
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    overflow: "hidden",
    cursor: images && images.length > 0 ? "pointer" : "default",
    backgroundColor: "#1e293b",
  };

  // The preview image itself
  const imageStyle = {
    width: "100%",
    height: "100%",
    maxHeight: "360px", // Match container max height
    objectFit: "cover", // fill container top-to-bottom
  };

  // Right content
  const contentStyle = {
    flex: 1,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  // Title styling
  const titleStyle = {
    fontSize: "30px",
    fontWeight: "500",
    color: "#e6f1ff",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const descriptionStyle = {
    fontSize: "20px",
    color: "#a8b2d1",
    lineHeight: "1.7",
    marginTop: "40px",
    marginBottom: "40px",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  // Link icon styling
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
    gap: "16px",
  };

  // If user clicks the image
  const handleImageClick = (e) => {
    e.stopPropagation();
    if (images && images.length > 0 && onImageClick) {
      onImageClick();
    }
  };

  // Handle link icon click
  const handleLinkClick = (e) => {
    e.stopPropagation();
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left image container: full vertical fill */}
      <div style={imageContainerStyle} onClick={handleImageClick}>
        {images && images.length > 0 ? (
          <img src={images[0]} alt={title} style={imageStyle} />
        ) : (
          <span style={{ color: "#fff" }}>No Image</span>
        )}
      </div>

      {/* Right content: title, description, badges, etc. */}
      <div style={contentStyle}>
        {year && (
          <div style={{ fontSize: "0.9rem", color: "#8892b0" }}>{year}</div>
        )}
        <div style={titleStyle}>
          <a
            href={link}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e6f1ff", textDecoration: "none" }}
          >
            {title}
          </a>
          <ExternalLink
            style={linkIconStyle}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
            onClick={handleLinkClick}
          />
        </div>

        {description && <p style={descriptionStyle}>{description}</p>}

        {technologies && (
          <div style={techListStyle}>
            {technologies.map((tech, i) => (
              <div key={i}>
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
    </div>
  );
}

export default ProjectCard;
