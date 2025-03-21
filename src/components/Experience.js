import React from "react";
import { experienceData } from "../data/experiences";

const Experience = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Experience</h2>
      {experienceData.map((job, idx) => (
        <div
          style={{
            border: "1px solid #233554",
            borderRadius: "4px",
            padding: "16px",
            marginBottom: "16px",
          }}
          key={idx}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#8892b0",
            }}
          >
            {job.period}
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#e6f1ff",
              margin: "8px 0",
            }}
          >
            {job.title} @ {job.company}
          </div>
          <p style={{ color: "#a8b2d1", marginBottom: "8px" }}>
            {job.description}
          </p>
          <div>
            {job.technologies.map((tech, i) => (
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#233554",
                  color: "#64ffda",
                  fontSize: "12px",
                  padding: "4px 8px",
                  marginRight: "8px",
                  marginBottom: "8px",
                  borderRadius: "4px",
                }}
                key={i}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
