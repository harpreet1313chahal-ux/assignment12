import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

test("renders footer text", () => {
  render(
    <table>
      <TableFooter text="Total Records: 10" />
    </table>,
  );

  expect(screen.getByText("Total Records: 10")).toBeInTheDocument();
});
