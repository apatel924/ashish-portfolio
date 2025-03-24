import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";
import ProjectCoverflowModal from "./ProjectCoverflowModal";

function ProjectsSection() {
  const [selectedImages, setSelectedImages] = useState(null);

  const handleOpenModal = (images) => {
    setSelectedImages(images);
  };
  const handleCloseModal = () => {
    setSelectedImages(null);
  };

  const containerStyle = {
    marginBottom: "100px",
    width: "100%",
    maxWidth: "1200px",
  };

  return (
    <div id="projects" style={containerStyle}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          // pass callback for onImageClick
          onImageClick={() => handleOpenModal(project.images)}
        />
      ))}

      {/* Cover flow modal */}
      <ProjectCoverflowModal
        images={selectedImages}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ProjectsSection;
