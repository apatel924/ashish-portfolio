import React from "react";

const AboutSection = () => {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    color: "#a8b2d1",
    maxWidth: "600px",
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>yap away</p>
    </div>
  );
};

export default AboutSection;
