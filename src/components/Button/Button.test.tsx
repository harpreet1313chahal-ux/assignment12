import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("button visible", () => {
  render(<Button label="Submit" />);
  expect(screen.getByText("Submit")).toBeVisible();
});

test("button disabled color", () => {
  render(<Button label="Submit" disabled />);
  expect(screen.getByText("Submit")).toHaveStyle("background-color: #cccccc");
});
