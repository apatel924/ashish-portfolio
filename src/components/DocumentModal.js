// src/components/DocumentModal.js
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker source - Fixed worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function DocumentModal({ src, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  if (!src) return null;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Fullscreen backdrop - completely opaque
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000", // Completely opaque black
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999999,
    pointerEvents: "all", // Ensure clicks are captured
  };

  // Modal container
  const modalStyle = {
    width: "70%",
    height: "80%",
    backgroundColor: "#121212",
    borderRadius: "16px",
    position: "relative",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    zIndex: 10000000,
    pointerEvents: "all", // Ensure clicks are captured
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

  // The iframe container to block click-through
  const iframeContainerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff", // Solid background
    position: "relative",
    zIndex: 1,
    pointerEvents: "all", // Ensure clicks are captured
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

        {/* Add a container div around the iframe */}
        <div style={iframeContainerStyle}>
          <Document
            file={src}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div style={{ color: "white", textAlign: "center" }}>
                Loading document...
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={800}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default DocumentModal;
