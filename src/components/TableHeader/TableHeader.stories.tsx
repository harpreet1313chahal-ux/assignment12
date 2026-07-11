import { TableHeader } from "./TableHeader";

const meta = {
  title: "Components/TableHeader",
  component: TableHeader,
};

export default meta;

export const Default = {
  args: {
    headers: ["Name", "Age", "City"],
  },
};

export const Disabled = {
  args: {
    headers: ["Disabled", "Disabled", "Disabled"],
  },
};
