import React from "react";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  disabled = false,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
