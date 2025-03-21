import React from "react";
import { experienceData } from "../data/experiences";

const Experience = () => {
  const containerStyle = {
    marginBottom: "60px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  const itemStyle = {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "20px",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "4px",
    border: "1px solid #233554",
    transition: "background-color 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#233554";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "";
  };

  const periodStyle = {
    fontFamily: "monospace",
    fontSize: "14px",
    color: "#8892b0",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#e6f1ff",
    margin: "8px 0",
  };

  const descStyle = {
    color: "#a8b2d1",
    marginBottom: "8px",
  };

  const tagsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
  };

  const tagStyle = {
    display: "inline-block",
    backgroundColor: "#233554",
    color: "#64ffda",
    fontSize: "12px",
    padding: "4px 8px",
    marginRight: "8px",
    marginBottom: "8px",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Experience</h2>
      {experienceData.map((job, idx) => (
        <div
          key={idx}
          style={itemStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={periodStyle}>{job.period}</div>
          <div>
            <div style={titleStyle}>
              {job.title} @ {job.company}
            </div>
            <p style={descStyle}>{job.description}</p>
            <div style={tagsContainerStyle}>
              {job.technologies.map((tech, i) => (
                <span style={tagStyle} key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
