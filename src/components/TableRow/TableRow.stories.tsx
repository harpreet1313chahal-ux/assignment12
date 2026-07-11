import { TableRow } from "./TableRow";

const meta = {
  title: "Components/TableRow",
  component: TableRow,
};

export default meta;

export const Default = {
  args: {
    row: ["John", "25", "Canada"],
  },
};

export const Disabled = {
  args: {
    row: ["Disabled", "--", "--"],
  },
};
