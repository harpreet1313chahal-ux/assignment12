import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders card title", () => {
  render(<Card title="Test Card" description="Test Description" />);

  expect(screen.getByText("Test Card")).toBeInTheDocument();
});

export {};
