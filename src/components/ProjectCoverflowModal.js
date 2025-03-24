import React, { useState } from "react";

/**
 * props:
 *  images: string[]  // array of image URLs
 *  onClose: function // callback to close the modal
 */
function ProjectCoverflowModal({ images, onClose }) {
  // If no images or empty => don't render anything
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // Blurred backdrop for an Apple-like vibe
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  // Modal container: ~80% of screen for a bigger display
  const modalContainerStyle = {
    width: "80vw",
    height: "80vh",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    color: "#000",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
  };

  // 3D container for horizontal cover flow
  const carouselStyle = {
    flex: 1,
    position: "relative",
    perspective: "1200px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Next/Prev button container
  const navBarStyle = {
    position: "absolute",
    bottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    zIndex: 2,
  };

  const navButtonStyle = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
  };

  // Stop click from closing modal if user clicks inside
  const stopPropagation = (e) => e.stopPropagation();

  // Next/Prev logic
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Horizontal cover flow:
   * - shift each slide along X
   * - rotate around Y
   * - scale smaller if not center
   */
  const getSlideStyle = (i) => {
    const delta = i - currentIndex;

    // For a standard horizontal cover flow
    const translateX = delta * 300; // shift slides left/right
    const rotateY = delta * 15; // rotate 15 deg per step
    const scale = 1 - Math.min(Math.abs(delta) * 0.1, 0.5);
    const zIndex = 100 - Math.abs(delta);
    const translateZ = -Math.abs(delta) * 150; // push off-center slides back

    return {
      position: "absolute",
      width: "30%", // each slide ~30% of the modal width
      height: "70%", // each slide ~70% of the modal height => portrait shape
      top: "50%",
      left: "50%",
      transformStyle: "preserve-3d",
      transform: `
        translate(-50%, -50%)
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      transition: "transform 0.5s ease",
      zIndex,
      display: Math.abs(delta) > 3 ? "none" : "block", // hide far slides
    };
  };

  // Ensure no top/bottom cut off => objectFit: "contain"
  const slideImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalContainerStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        <div style={carouselStyle}>
          {images.map((src, i) => (
            <div key={i} style={getSlideStyle(i)}>
              <img src={src} alt="" style={slideImageStyle} />
            </div>
          ))}

          <div style={navBarStyle}>
            <button style={navButtonStyle} onClick={handlePrev}>
              Previous
            </button>
            <button style={navButtonStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCoverflowModal;
