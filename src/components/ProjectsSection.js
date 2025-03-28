import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCoverflowModal from "./ProjectCoverFlowModal";
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
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        {projectsData.map((project, index) => (
          <div key={index} style={{ maxHeight: "300px" }}>
            <ProjectCard
              {...project}
              onImageClick={() => handleOpenModal(project.images)}
            />
          </div>
        ))}
      </div>

      <ProjectCoverflowModal
        images={selectedImages}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ProjectsSection;
