import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../app/Header";
import { HeaderLink } from "../app/HeaderLink";


const meta: Meta<typeof Header> = {
  title: "Layout/HeaderLink",
  component: HeaderLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
 
    chromatic: { viewports: [640, 1280] },
    backgrounds: {
      default: "light-inverse",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderLink>;

export const Default: Story = {
  args: {
    children: "Home",
    href: "#",
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
};
