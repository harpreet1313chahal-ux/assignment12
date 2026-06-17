import React from "react";
import { TableFooterProps } from "./TableFooter.types";

export const TableFooter = ({
  text,
  colSpan = 1,
}: TableFooterProps) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={colSpan}>{text}</td>
      </tr>
    </tfoot>
  );
};