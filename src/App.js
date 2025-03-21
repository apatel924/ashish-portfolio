import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Experience from "./components/Experience";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0a192f",
        minHeight: "100vh",
        color: "#e6f1ff",
      }}
    >
      <Header />
      <Nav />
      <main style={{ padding: "20px" }}>
        <h2>Welcome!</h2>
        <p>This is my personal website in progress.</p>
        <Experience />
      </main>
    </div>
  );
}

export default App;
