import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio home page", () => {
  render(<App />);
  expect(screen.getByText(/Harpreet Chahal/i)).toBeInTheDocument();
});
