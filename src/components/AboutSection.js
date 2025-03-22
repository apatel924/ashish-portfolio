// src/AboutSection.js
import React from "react";

function AboutSection() {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#a8b2d1",
    lineHeight: 1.6,
    maxWidth: "600px",
  };

  return (
    <div id="about" style={containerStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        I’m a Full Stack Web Developer based in Edmonton, Alberta. With a
        background in Psychology and Chemistry from the University of Alberta
        and a diploma from Lighthouse Labs, I combine analytical skills with
        creative problem-solving. My experience spans mobile and web
        development—from co‑founding the Quiz Arena iOS app to building dynamic
        expense tracking systems. I’m passionate about crafting accessible,
        user‑centric digital experiences that are both visually engaging and
        highly functional.
      </p>
    </div>
  );
}

export default AboutSection;
