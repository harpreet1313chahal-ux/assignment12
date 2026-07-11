import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("renders table headers", () => {
  render(
    <table>
      <TableHeader headers={["Name", "Age"]} />
    </table>,
  );

  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Age")).toBeInTheDocument();
});
