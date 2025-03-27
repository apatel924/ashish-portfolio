// src/components/DocumentModal.js
import React from "react";

function DocumentModal({ src, onClose }) {
  if (!src) return null;

  // Fullscreen backdrop
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.85)", // Dark overlay
    backdropFilter: "blur(8px)", // Blurred background
    WebkitBackdropFilter: "blur(8px)", // Safari support
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  // Modal container
  const modalStyle = {
    width: "70vw",
    height: "80vh",
    backgroundColor: "#121212",
    borderRadius: "16px",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    isolation: "isolate",
    backdropFilter: "none",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    color: "#8892b0",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    padding: "8px",
    borderRadius: "50%",
    transition: "color 0.2s",
  };

  // Stop clicks inside the modal from bubbling to the backdrop
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={backdropStyle} onClick={onClose}>
      {/* Clicking on the backdrop calls onClose */}
      <div style={modalStyle} onClick={stopPropagation}>
        {/* Clicking inside the modal does NOT close it */}
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        {/* Embed the PDF (or other document) */}
        <iframe
          src={src}
          title="Document PDF"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            backgroundColor: "#fff",
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}

export default DocumentModal;
