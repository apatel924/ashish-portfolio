import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

function ProjectsSection() {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff",
  };

  return (
    <div id="projects" style={containerStyle}>
      <h2 style={headingStyle}>Projects</h2>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectsSection;
