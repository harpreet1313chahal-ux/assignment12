import React from "react";
import { TableCellProps } from "./TableCell.types";

export const TableCell = ({ value }: TableCellProps) => {
  return <td>{value}</td>;
};