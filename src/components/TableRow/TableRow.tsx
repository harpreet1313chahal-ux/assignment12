import React from "react";
import { TableRowProps } from "./TableRow.types";

export const TableRow = ({ row }: TableRowProps) => {
  return (
    <tr>
      {row.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};
