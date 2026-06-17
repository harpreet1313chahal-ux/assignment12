import styled from "styled-components";
import { ButtonProps } from "./Button.types";

interface StyledButtonProps {
  backgroundColor: string;
  disabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor};

  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  cursor: ${(props) =>
    props.disabled ? "not-allowed" : "pointer"};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = ({
  label,
  backgroundColor = "#007bff",
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};