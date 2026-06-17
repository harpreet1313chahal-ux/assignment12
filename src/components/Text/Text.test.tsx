import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("renders text", () => {
  render(<Text text="Hello World" />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});