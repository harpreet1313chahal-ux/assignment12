import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("renders label", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeInTheDocument();
});

test("disabled label is gray", () => {
  render(<Label text="Disabled" disabled />);
  expect(screen.getByText("Disabled")).toHaveStyle(
    "color: gray"
  );
});