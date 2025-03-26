import React, { useState } from "react";

function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no project is selected, don't render the modal
  if (!project) return null;

  // Container covering the screen
  const modalBackdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.85)", // Darker backdrop
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  // The modal box itself
  const modalContainerStyle = {
    backgroundColor: "#121212", // Darker blackish grey background
    padding: "30px",
    borderRadius: "16px", // More rounded corners
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "auto",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "1.2rem",
    color: "#8892b0",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    transition: "color 0.2s",
    padding: "8px",
    borderRadius: "50%",
    ":hover": {
      color: "#fff",
    },
  };

  // Image style
  const imageStyle = {
    width: "100%",
    borderRadius: "8px", // Rounded image corners
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)", // Subtle image shadow
  };

  // Navigation buttons
  const navButtonStyle = {
    margin: "0 8px",
    padding: "10px 20px",
    backgroundColor: "#233554",
    color: "#e6f1ff",
    border: "none",
    borderRadius: "8px", // Rounded button corners
    cursor: "pointer",
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "#2f4773",
      transform: "translateY(-1px)",
    },
  };

  // Functions to handle next/prev image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  // Stop click from closing modal when user clicks inside container
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={modalBackdropStyle} onClick={onClose}>
      <div style={modalContainerStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        <img src={project.images[currentIndex]} alt="" style={imageStyle} />

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button style={navButtonStyle} onClick={handlePrev}>
            Prev
          </button>
          <button style={navButtonStyle} onClick={handleNext}>
            Next
          </button>
        </div>

        <h2
          style={{
            fontSize: "1.75rem",
            marginBottom: "12px",
            color: "#e6f1ff",
          }}
        >
          {project.title}
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#a8b2d1", lineHeight: 1.7 }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectModal;
