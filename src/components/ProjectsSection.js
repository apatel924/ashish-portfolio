import React from "react";
import { projectsData } from "../data/projects";

const Projects = () => {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const projectItemStyle = {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "20px",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "4px",
    border: "1px solid #233554",
    transition: "background-color 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#233554";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "";
  };

  const thumbnailStyle = (thumbnail) => ({
    width: "120px",
    height: "80px",
    overflow: "hidden",
    borderRadius: "4px",
    backgroundImage: thumbnail ? `url(${thumbnail})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  const titleStyle = {
    fontSize: "18px",
    color: "#e6f1ff",
    marginBottom: "8px",
    fontWeight: "bold",
  };

  const descStyle = {
    marginBottom: "8px",
    color: "#a8b2d1",
    maxWidth: "600px",
    lineHeight: 1.5,
  };

  const tagsStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#233554",
    color: "#64ffda",
    fontFamily: "monospace",
    fontSize: "12px",
    padding: "4px 8px",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Projects</h2>
      {projectsData.map((project, index) => (
        <div
          key={index}
          style={projectItemStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={thumbnailStyle(project.thumbnail)} />
          <div>
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descStyle}>{project.description}</p>
            <div style={tagsStyle}>
              {project.technologies.map((tech, i) => (
                <span style={tagStyle} key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
