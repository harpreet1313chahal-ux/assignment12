import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

test("renders dropdown", () => {
  render(<Dropdown options={["One", "Two"]} />);
  expect(screen.getByDisplayValue("One")).toBeInTheDocument();
});
