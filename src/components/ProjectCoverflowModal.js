import React, { useState } from "react";

function ProjectCoverflowModal({ images, onClose }) {
  // If no images or empty => don't render
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // BACKDROP: Apple-like blurred background
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

  // MODAL CONTAINER: ~80% viewport for consistent sizing
  const modalContainerStyle = {
    width: "80vw",
    height: "80vh",
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

  // CAROUSEL WRAPPER: perspective for 3D
  const carouselStyle = {
    flex: 1,
    position: "relative",
    perspective: "1000px",
    overflow: "hidden",
  };

  // STOP clicks from closing modal if user clicks inside
  const stopPropagation = (e) => e.stopPropagation();

  // HORIZONTAL CLICK => left half = prev, right half = next
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
   * For each image i, compute "delta" = i - currentIndex
   * We'll do a mild horizontal cover flow:
   *  - shift slides horizontally
   *  - rotate around Y axis a bit
   *  - scale smaller if not center
   *  - slight z-translation
   */
  const getSlideStyle = (i) => {
    const delta = i - currentIndex;
    // minimal 3D transform
    const translateX = delta * 200; // spacing between slides
    const rotateY = delta * 5; // mild tilt
    const scale = 1 - Math.min(Math.abs(delta) * 0.05, 0.3);
    const zIndex = 100 - Math.abs(delta);
    const translateZ = -Math.abs(delta) * 50; // slight push back

    return {
      position: "absolute",
      width: "40%", // each slide ~40% of the modal width
      height: "60%", // each slide ~60% of the modal height
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
      // Hide slides that are too far from center
      display: Math.abs(delta) > 3 ? "none" : "block",
    };
  };

  // Each slide's image style
  const slideImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain", // no top/bottom cropping
    borderRadius: "8px",
    backgroundColor: "transparent",
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalContainerStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        {/* The cover flow container */}
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
