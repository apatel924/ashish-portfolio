import React, { useState } from "react";

function ProjectCoverflowModal({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // If no images => don't render
  if (!images || images.length === 0) return null;

  // BACKDROP (blurred, centered)
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

  // MODAL (70×70 for less negative space)
  const modalContainerStyle = {
    width: "70vw",
    height: "70vh",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  };

  // CLOSE BUTTON
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

  // COVER FLOW CONTAINER
  const carouselStyle = {
    flex: 1,
    position: "relative",
    perspective: "1000px",
    overflow: "hidden",
  };

  // STOP clicks from closing the modal if user clicks inside container
  const stopPropagation = (e) => e.stopPropagation();

  // LEFT/RIGHT half-click => prev/next
  const handleCarouselClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  // SHIFT to next/prev
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Minimally spaced horizontal cover flow
   * with bigger slides to reduce negative space.
   */
  const getSlideStyle = (i) => {
    const delta = i - currentIndex;
    const translateX = delta * 150; // closer slides
    const rotateY = delta * 4; // mild tilt
    const scale = 1 - Math.min(Math.abs(delta) * 0.07, 0.4);
    const zIndex = 100 - Math.abs(delta);
    const translateZ = -Math.abs(delta) * 40;

    // Hide slides beyond ±2 from center
    if (Math.abs(delta) > 2) {
      return { display: "none" };
    }

    return {
      position: "absolute",
      width: "60%", // bigger slides => less negative space
      height: "70%", // fill more of the modal
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
      display: "block",
    };
  };

  // IMAGE STYLING => fill container w/o cropping top/bottom
  const slideImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "8px",
    backgroundColor: "transparent",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalContainerStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        <div style={carouselStyle} onClick={handleCarouselClick}>
          {images.map((src, i) => (
            <div key={i} style={getSlideStyle(i)}>
              <img src={src} alt="" style={slideImageStyle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCoverflowModal;
