import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

export const Default = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: true,
  },
};
