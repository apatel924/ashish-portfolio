import React from "react";

function DocumentModal({ docType, src, onClose }) {
  // If no source => don't render
  if (!src) return null;

  // BACKDROP
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

  // MODAL CONTAINER
  const modalStyle = {
    width: "70vw",
    height: "80vh",
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    position: "relative",
    boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
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

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalStyle} onClick={stopPropagation}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>

        {/* Display PDF or Image */}
        {docType === "pdf" ? (
          // PDF in an iframe
          <iframe
            src={src}
            title="Document PDF"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        ) : (
          // docType === "image"
          <img
            src={src}
            alt="Document"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default DocumentModal;
