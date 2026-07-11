import { Label } from "./Label";

const meta = {
  title: "Components/Label",
  component: Label,
};

export default meta;

export const Default = {
  args: {
    text: "Sample Label",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Sample Label",
    disabled: true,
  },
};
