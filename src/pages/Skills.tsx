import React from "react";
import { Text } from "../components/Text/Text";

const Skills = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Skills</h1>

      <ul>
        <li>
          <Text text="HTML" />
        </li>
        <li>
          <Text text="CSS" />
        </li>
        <li>
          <Text text="JavaScript" />
        </li>
        <li>
          <Text text="TypeScript" />
        </li>
        <li>
          <Text text="React" />
        </li>
        <li>
          <Text text="Ruby on Rails" />
        </li>
        <li>
          <Text text="Docker" />
        </li>
        <li>
          <Text text="GitHub" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
