import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a sample card description.",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Card Title",
    description: "This card is disabled.",
    disabled: true,
  },
};
