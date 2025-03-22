// src/components/AboutSection.js
import React from "react";

function AboutSection() {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    color: "#a8b2d1",
    lineHeight: 1.6,
  };

  return (
    <div id="about" style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        I’m a Full Stack Web Developer based in Edmonton, Alberta. With a
        background in Psychology and Chemistry, I combine analytical thinking
        with creative problem solving. My experience spans mobile and web
        development, including co-founding an iOS quiz app (Quiz Arena) and
        building enterprise expense-tracking systems. I’m passionate about
        user-centric design, performance optimization, and writing clean,
        maintainable code.
      </p>
    </div>
  );
}

export default AboutSection;
