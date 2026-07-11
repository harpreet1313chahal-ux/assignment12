import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
};

export default meta;

export const Default = {
  args: {
    text: "Sample Text",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Sample Text",
    disabled: true,
  },
};
