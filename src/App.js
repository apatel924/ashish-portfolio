import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  // Inline styles for the overall page
  const appStyle = {
    backgroundColor: "#0a192f",
    color: "#e6f1ff",
    fontFamily:
      '"Calibre","Inter","SF Pro Text",-apple-system,system-ui,sans-serif',
    minHeight: "100vh",
  };

  const contentStyle = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
  };

  const sectionStyle = {
    padding: "100px 0",
    borderBottom: "1px solid #233554",
  };

  const heroStyle = {
    // The "hero" or top section
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
  };

  return (
    <div style={appStyle}>
      {/* Navigation bar at the top (or you can make it fixed) */}
      <Nav />

      {/* Hero Section */}
      <div style={{ ...contentStyle, ...heroStyle }} id="hero">
        <Header />
      </div>

      {/* About Section */}
      <section id="about" style={{ ...contentStyle, ...sectionStyle }}>
        <h2>About Me</h2>
        <p style={{ maxWidth: 600, lineHeight: 1.6 }}>
          This is where you introduce yourself, your background, your passions,
          etc.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ ...contentStyle, ...sectionStyle }}>
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...contentStyle, ...sectionStyle }}>
        <Projects />
      </section>

      {/* Footer Section */}
      <div style={{ ...contentStyle, padding: "50px 0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
