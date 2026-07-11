import React from "react";
import { TableHeaderProps } from "./TableHeader.types";

export const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};
