import React from "react";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked = false,
  disabled = false,
}) => {
  return (
    <label>
      <input type="radio" checked={checked} disabled={disabled} readOnly />
      {label}
    </label>
  );
};
