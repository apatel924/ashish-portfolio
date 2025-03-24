import React, { useState } from "react";

/**
 * images: string[]  // array of image paths
 * onClose: function // callback to close the modal
 */
function ProjectCoverflowModal({ images, onClose }) {
  // Current center image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images, don't render anything
  if (!images || images.length === 0) return null;

  // Backdrop styling
  const backdropStyle = {
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

  // Modal container at ~80% of screen
  const modalContainerStyle = {
    width: "80vw",
    height: "80vh",
    backgroundColor: "#0a192f",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    color: "#fff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
  };

  // 3D container to hold slides
  const carouselStyle = {
    flex: 1,
    position: "relative",
    perspective: "1200px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Next/Prev buttons at bottom center
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
    backgroundColor: "#233554",
    color: "#e6f1ff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  // Stop clicks from closing modal if clicked inside container
  const stopPropagation = (e) => e.stopPropagation();

  // Looping logic
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * For each slide, compute a "delta" from currentIndex.
   * We'll transform each slide in 3D space:
   * - shift horizontally
   * - rotate a bit
   * - scale smaller if not center
   * - push back in z-axis
   */
  const getSlideStyle = (i) => {
    const delta = i - currentIndex;
    // If delta is too large negative (like -3), loop around
    // But we've already done that in handleNext/handlePrev
    // so we'll keep it simple.

    // We'll keep a max of ±2 slides visible for a simpler cover flow
    const offset = (delta + images.length) % images.length;
    let d = offset;
    if (offset > images.length / 2) {
      d = offset - images.length; // negative side
    }

    // For a basic cover flow
    const translateX = d * 300; // shift each slide 300px left/right
    const rotateY = d * 15; // rotate each slide by 15 deg * d
    const scale = 1 - Math.min(Math.abs(d) * 0.1, 0.5);
    const zIndex = 100 - Math.abs(d);
    // push slides further in z-axis
    const translateZ = -Math.abs(d) * 150;

    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "40%", // each slide ~40% of modal width
      height: "60%", // each slide ~60% of modal height
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
      display: Math.abs(d) > 3 ? "none" : "block", // hide slides far away
    };
  };

  const slideImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "4px",
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
