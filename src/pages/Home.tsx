import React from "react";
import { Text } from "../components/Text/Text";
import { Button } from "../components/Button/Button";

const Home = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>
        <Text text="Harpreet Chahal" />
      </h1>

      <h2>
        <Text text="Business Systems Build and Testing Student" />
      </h2>

      <p>
        <Text text="Welcome to my portfolio website. This website showcases the projects and technologies I have learned during my program at RRC Polytech." />
      </p>

      <Button label="View My Projects" backgroundColor="#1976d2" />
    </div>
  );
};

export default Home;
