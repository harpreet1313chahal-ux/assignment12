import type { Meta, StoryObj } from "@storybook/react";
import { TableFooter } from "./TableFooter";

const meta: Meta<typeof TableFooter> = {
  title: "Components/TableFooter",
  component: TableFooter,
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    text: "Total Records: 10",
    colSpan: 2,
  },
};