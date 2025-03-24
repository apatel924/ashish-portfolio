import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerStyle = {
    marginBottom: "100px",
    width: "100%",
    maxWidth: "1200px",
  };

  // Open the modal with the clicked project
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" style={containerStyle}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          onCardClick={() => handleOpenModal(project)}
        />
      ))}

      {/* Modal for the selected project */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}

export default ProjectsSection;
