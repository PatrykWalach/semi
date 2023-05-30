import type { Meta, StoryObj } from "@storybook/react";

import Navigation from "@/app/Navigation";
import NavigationLink from "@/app/NavigationLink";

const meta: Meta<typeof NavigationLink> = {
  title: "Layout/NavigationLink",
  component: NavigationLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Navigation>
        <Story></Story>
      </Navigation>
    ),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout

    chromatic: { viewports: [640, 1280] },
    backgrounds: {
      default: "inverse-surface",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
  args: {
    children: "Home",
    href: "#",
  },
 
};

export const Active: Story = {
  args: {
    ...Default.args,
    pathname: "#",
  },
};
