import React from "react";
import "./App.css";

import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { Dropdown } from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Assignment 13 - UI Component Library</h1>

      <p>
        This project demonstrates the reusable UI components created in
        Assignment 12 with build checks added in Assignment 13.
      </p>

      <hr />

      <h2>Button Component</h2>
      <Button label="Click Me" />

      <br />
      <br />

      <h2>Card Component</h2>
      <Card
        title="Sample Card"
        description="This is a reusable card component."
      />

      <br />

      <h2>harpreet</h2>

      <h2>Dropdown Component</h2>
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
    </div>
  );
}

export default App;
