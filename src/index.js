import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Hello World</h1>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
