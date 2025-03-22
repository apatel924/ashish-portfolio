import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "../data/experiences";

function ExperienceSection() {
  const containerStyle = {
    marginBottom: "60px",
    width: "100%",
    maxWidth: "1200px", // Added maxWidth to increase container size
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff",
  };

  return (
    <div id="experience" style={containerStyle}>
      {/* <h2 style={headingStyle}>Experience</h2> */}
      {experienceData?.map((job, index) => (
        <ExperienceCard key={index} {...job} />
      ))}
    </div>
  );
}

export default ExperienceSection;
