import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Default = {
  args: {
    label: "Click Me",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};