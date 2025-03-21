import React from "react";
import { experienceData } from "../data/experiences";

const Experience = () => {
  const sectionStyle = {
    margin: "20px 0",
  };

  const itemStyle = {
    border: "1px solid #233554",
    borderRadius: "4px",
    padding: "16px",
    marginBottom: "16px",
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
    <section style={sectionStyle}>
      <h2 style={{ marginBottom: "16px", color: "#e6f1ff" }}>Experience</h2>
      {experienceData.map((job, idx) => (
        <div style={itemStyle} key={idx}>
          <div style={periodStyle}>{job.period}</div>
          <div style={titleStyle}>
            {job.title} @ {job.company}
          </div>
          <p style={descStyle}>{job.description}</p>
          <div>
            {job.technologies.map((tech, i) => (
              <span style={tagStyle} key={i}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
