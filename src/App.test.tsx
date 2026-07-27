import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Assignment 13 heading", () => {
  render(<App />);
  expect(
    screen.getByText(/Assignment 13 - UI Component Library/i),
  ).toBeInTheDocument();
});
