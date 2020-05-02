import React from "react";
import Logo from "./components/Logo";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <svg viewBox="0 0 100 100" className="triangle">
        <polygon id="e1_polygon" points="0 0, 0 100, 100 0" />
      </svg>
      <svg viewBox="0 0 100 100" className="triangleB">
        <polygon id="e1_polygon" points="100 0, 100 100, 0 100" />
      </svg>
      <Logo />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
