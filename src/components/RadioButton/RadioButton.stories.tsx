import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
};

export default meta;

export const Default = () => (
  <RadioButton label="Radio Option" />
);

export const Checked = () => (
  <RadioButton label="Radio Option" checked />
);

export const Disabled = () => (
  <RadioButton label="Radio Option" disabled />
);
export {};