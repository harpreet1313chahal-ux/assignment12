import React from "react";
import { Text } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
};

export default meta;

export const Default = () => (
  <Text text="Hello World" />
);

export const Disabled = () => (
  <Text text="Disabled Text" disabled />
);