import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Resources from "./pages/Resources";
import DeveloperSetup from "./pages/DeveloperSetup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            background: "#1976d2",
            padding: "15px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} to="/work">
            Work
          </Link>

          <Link style={{ color: "white", textDecoration: "none" }} to="/skills">
            Skills
          </Link>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/resources"
          >
            Resources
          </Link>

          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/developer"
          >
            Developer Setup
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/developer" element={<DeveloperSetup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
