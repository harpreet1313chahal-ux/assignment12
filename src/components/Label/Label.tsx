import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "gray" : "black")};
  font-size: 18px;
`;

export const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      {text}
    </StyledLabel>
  );
};