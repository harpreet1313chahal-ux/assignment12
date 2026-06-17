import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("renders radio button label", () => {
  render(<RadioButton label="Radio Option" />);
  expect(screen.getByText("Radio Option")).toBeInTheDocument();
});
export {};