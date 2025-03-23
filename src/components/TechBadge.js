import React from "react";

function TechBadge({ children }) {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    backgroundColor: "rgba(100,255,218,0.1)", // Cool green background with transparency
    padding: "4px 12px",
    fontSize: "1.25rem",
    fontWeight: "500",
    color: "#64ffda", // Bright green text that pops
    border: "1px solid rgba(100,255,218,0.3)", // Subtle green border
    transition: "background-color 0.3s, color 0.3s",
  };

  return <div style={badgeStyle}>{children}</div>;
}

export default TechBadge;
