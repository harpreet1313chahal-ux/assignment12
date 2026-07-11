import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
};

export default meta;

export const Default = {
  args: {
    label: "Radio Option",
    checked: false,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Radio Option",
    checked: false,
    disabled: true,
  },
};
