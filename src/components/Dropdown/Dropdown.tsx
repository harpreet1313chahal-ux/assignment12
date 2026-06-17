import React from "react";
import { DropdownProps } from "./Dropdown.types";

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
}) => {
  return (
    <select disabled={disabled}>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};