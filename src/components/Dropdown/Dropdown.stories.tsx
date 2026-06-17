import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
};

export default meta;

export const Default = () => (
  <Dropdown
    options={["Option 1", "Option 2", "Option 3"]}
  />
);

export const Disabled = () => (
  <Dropdown
    options={["Option 1", "Option 2", "Option 3"]}
    disabled
  />
);