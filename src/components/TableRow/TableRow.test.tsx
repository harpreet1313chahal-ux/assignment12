import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

test("renders row data", () => {
  render(
    <table>
      <tbody>
        <TableRow row={["John", "25"]} />
      </tbody>
    </table>,
  );

  expect(screen.getByText("John")).toBeInTheDocument();
  expect(screen.getByText("25")).toBeInTheDocument();
});
