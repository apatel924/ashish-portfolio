import React from "react";

function TechBadge({ children }) {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    backgroundColor: "rgba(31,41,55,0.5)",
    padding: "4px 12px",
    fontSize: "0.75rem",
    fontWeight: "500",
    color: "#cbd5e1",
    border: "1px solid rgba(75,85,99,0.5)",
    transition: "background-color 0.3s, color 0.3s",
  };

  return <div style={badgeStyle}>{children}</div>;
}

export default TechBadge;
