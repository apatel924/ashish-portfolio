// src/components/DocumentModal.js
import React from "react";

function DocumentModal({ src, onClose }) {
  if (!src) return null;

  // Blurred backdrop
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.85)", // Darker, more opaque backdrop
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  // Modal container
  const modalStyle = {
    width: "70vw",
    height: "80vh",
    backgroundColor: "#121212", // Solid dark background
    borderRadius: "16px",
    position: "relative",
    boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  // Close button
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.2rem",
    color: "#8892b0", // Light gray color
    background: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 2,
    padding: "8px",
    borderRadius: "50%",
    transition: "color 0.2s",
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        {/* PDF displayed in an iframe */}
        <iframe
          src={src}
          title="Document PDF"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            backgroundColor: "#fff", // White background for PDF
          }}
        />
      </div>
    </div>
  );
}

export default DocumentModal;
