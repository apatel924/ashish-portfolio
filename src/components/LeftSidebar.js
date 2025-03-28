import React, { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import DocumentModal from "./DocumentModal";
import linkedinImg from "../images/linkedin-img.jpeg";

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <DocumentModal src="/docs/Ashish Patel Resume.pdf" onClose={onClose} />
  );
};

export const DiplomaModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <DocumentModal
      src="/docs/Ashish Patel DIPLOMA April 28, 2023 (1).pdf"
      onClose={onClose}
    />
  );
};

function Header() {
  const [showResume, setShowResume] = useState(false);
  const [showDiploma, setShowDiploma] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "project"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHoverEnter = (e) => {
    e.target.style.color = "#64ffda";
  };

  const handleHoverLeave = (e) => {
    const href = e.target.getAttribute("href")?.substring(1);
    if (href === activeSection) {
      e.target.style.color = "#64ffda";
    } else {
      e.target.style.color = "#8892b0";
    }
  };

  const getLinkStyle = (section) => ({
    fontSize: activeSection === section ? "1.4rem" : "1.2rem",
    color: activeSection === section ? "#64ffda" : "#8892b0",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s",
  });

  return (
    <header
      style={{
        position: isMobile ? "static" : "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: isMobile ? "100%" : "60%",
        maxWidth: "800px",
        height: isMobile ? "auto" : "100vh",
        padding: isMobile ? "40px 20px" : "120px 100px",
        backgroundColor: "#0a192f",
        color: "#8892b0",
        overflow: "auto",
      }}
    >
      {/* Top Section: Name, Title, and (optionally) avatar */}
      <div style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {/* Avatar (optional) */}
          <img
            src={linkedinImg}
            alt="Ashish Patel"
            style={{
              width: "80px", // Increased from 60px
              height: "80px", // Increased from 60px
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #64ffda",
            }}
          />
          <div>
            <h1
              style={{
                fontSize: "3.5rem", // Increased from 2.75rem
                fontWeight: "bold",
                margin: 0,
                color: "#e6f1ff",
                lineHeight: 1.1,
              }}
            >
              Ashish Patel
            </h1>
            <h2
              style={{
                fontSize: "1.5rem", // Increased from 1.2rem
                color: "#64ffda",
                margin: "8px 0 0 0",
                fontWeight: 500,
              }}
            >
              Full Stack Web Developer
            </h2>
          </div>
        </div>

        {/* Brief paragraph */}
        <p
          style={{
            fontSize: "1.25rem", // Increased from 1rem
            color: "#8892b0",
            maxWidth: "600px",
            marginTop: "8px",
            lineHeight: 1.5,
          }}
        >
          I build accessible, pixel-perfect digital experiences for the web. My
          focus is on crafting clean, performant code and delightful user
          interfaces.
        </p>
      </div>

      {/* Main navigation links (vertical) */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        <a
          href="#about"
          style={getLinkStyle("about")}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          About
        </a>
        <a
          href="#experience"
          style={getLinkStyle("experience")}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          Experience
        </a>
        <a
          href="#project"
          style={getLinkStyle("project")}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          Projects
        </a>
      </nav>

      {/* Secondary navigation (Resume, Certification) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem", // Increased from 1.25rem
            fontWeight: "bold",
            color: "#8892b0",
            cursor: "pointer",
            transition: "color 0.3s",
            textTransform: "uppercase",
          }}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          onClick={() => setShowResume(true)}
        >
          Resume
        </span>
        <span
          style={{
            fontSize: "1.5rem", // Increased from 1.25rem
            fontWeight: "bold",
            color: "#8892b0",
            cursor: "pointer",
            transition: "color 0.3s",
            textTransform: "uppercase",
          }}
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          onClick={() => setShowDiploma(true)}
        >
          Certification
        </span>
      </div>

      {/* Social links at the bottom */}
      <div>
        <SocialLinks vertical={false} />
      </div>

      {/* Document Modals */}
      {showResume && (
        <DocumentModal
          src="/docs/Ashish Patel Resume.pdf"
          onClose={() => setShowResume(false)}
        />
      )}

      {showDiploma && (
        <DocumentModal
          src="/docs/Ashish Patel DIPLOMA April 28, 2023 (1).pdf"
          onClose={() => setShowDiploma(false)}
        />
      )}
    </header>
  );
}

export { linkedinImg };

export const nameStyle = {
  fontSize: "3.5rem", // Increased from 2.75rem
  fontWeight: "bold",
  margin: 0,
  color: "#e6f1ff",
  lineHeight: 1.1,
};

export const titleStyle = {
  fontSize: "1.5rem", // Increased from 1.2rem
  color: "#64ffda",
  margin: "8px 0 0 0",
  fontWeight: 500,
};

export default Header;
