import React from "react";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Projects</h2>
      {projectsData.map((project, index) => (
        <div
          key={index}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "20px",
            marginBottom: "40px",
            padding: "20px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease",
            border: "1px solid #233554",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#233554")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
        >
          <div
            style={{
              width: "120px",
              height: "80px",
              overflow: "hidden",
              borderRadius: "4px",
              backgroundImage: project.thumbnail
                ? `url(${project.thumbnail})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <h3
              style={{
                fontSize: "20px",
                color: "#e6f1ff",
                marginBottom: "12px",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                marginBottom: "15px",
                color: "#a8b2d1",
                maxWidth: "600px",
                lineHeight: 1.5,
              }}
            >
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {project.technologies.map((tech, i) => (
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#233554",
                    color: "#64ffda",
                    fontFamily: "monospace",
                    fontSize: "12px",
                    padding: "6px 12px",
                    marginRight: "8px",
                    marginBottom: "8px",
                    borderRadius: "4px",
                  }}
                  key={i}
                >
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
