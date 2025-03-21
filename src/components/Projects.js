import React from "react";
import { projectsData } from "../data/projects";

const Projects = () => {
  const sectionStyle = { marginBottom: "100px" };
  const itemStyle = {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "20px",
    marginBottom: "40px",
    cursor: "pointer",
    padding: "20px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
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
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "24px",
    color: "#e6f1ff",
  };
  const descStyle = {
    marginBottom: "15px",
    color: "#a8b2d1",
    maxWidth: "600px",
    lineHeight: 1.5,
  };
  const tagsStyle = { display: "flex", flexWrap: "wrap" };
  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#233554",
    color: "#64ffda",
    fontFamily: "monospace",
    fontSize: "12px",
    padding: "6px 12px",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: "#e6f1ff", marginBottom: "16px" }}>Projects</h2>
      {projectsData.map((project, index) => (
        <div
          key={index}
          style={itemStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#233554")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
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
    </section>
  );
};

export default Projects;
