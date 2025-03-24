// src/components/ProjectModal.js
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
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  // The modal box itself
  const modalContainerStyle = {
    backgroundColor: "#0a192f",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "auto",
    position: "relative",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    color: "#fff",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  };

  // Image style
  const imageStyle = {
    width: "100%",
    borderRadius: "4px",
    marginBottom: "16px",
  };

  // Simple navigation
  const navButtonStyle = {
    margin: "0 8px",
    padding: "8px 16px",
    backgroundColor: "#233554",
    color: "#e6f1ff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
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

        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <button style={navButtonStyle} onClick={handlePrev}>
            Prev
          </button>
          <button style={navButtonStyle} onClick={handleNext}>
            Next
          </button>
        </div>

        {/* Optionally display project title/description here */}
        <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
          {project.title}
        </h2>
        <p style={{ fontSize: "1rem", color: "#a8b2d1", lineHeight: 1.5 }}>
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectModal;
