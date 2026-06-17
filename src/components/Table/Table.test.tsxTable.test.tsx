import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("renders table header", () => {
  render(
    <Table
      headers={["Name"]}
      data={[["John"]]}
    />
  );

  expect(screen.getByText("Name")).toBeInTheDocument();
});

export {};