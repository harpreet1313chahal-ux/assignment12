import React from "react";
import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
  return (
    <span
      style={{
        color: disabled ? "gray" : "black",
      }}
    >
      {text}
    </span>
  );
};
