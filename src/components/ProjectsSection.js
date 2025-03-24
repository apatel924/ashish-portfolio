import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCoverflowModal from "./ProjectCoverflowModal";
import { projectsData } from "../data/projects";

function ProjectsSection() {
  const [selectedImages, setSelectedImages] = useState(null);

  const handleOpenModal = (images) => {
    setSelectedImages(images);
  };
  const handleCloseModal = () => {
    setSelectedImages(null);
  };

  return (
    <div style={{ marginBottom: "100px", width: "100%", maxWidth: "1200px" }}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          onImageClick={() => handleOpenModal(project.images)}
        />
      ))}

      <ProjectCoverflowModal
        images={selectedImages}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ProjectsSection;
