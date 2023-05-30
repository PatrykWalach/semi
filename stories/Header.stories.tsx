import { Header } from "@/app/Header";
import Navigation from "@/app/Navigation";
import NavigationLink from "@/app/NavigationLink";
import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import type { PlayFunction } from "@storybook/types";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    grid: "fullscreen",
    chromatic: { viewports: [640, 1280] },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;


export const Default: Story = {
  args: {
    children: (
      <Navigation>
        <NavigationLink href="#">Home</NavigationLink>
        <NavigationLink href="#">About</NavigationLink>
      </Navigation>
    ),
  },
};

export const Open: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
    chromatic: { viewports: [640] },
  },
  play: withinGrid(async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", {
        name: "Open main menu",
      })
    );
  }),
};

function withinGrid(
  play?: PlayFunction<ReactRenderer>
): PlayFunction<ReactRenderer> {
  return async (args) => {
    const canvas = within(args.canvasElement);

    for (const grid of canvas.getAllByTestId("grid")) {
      await play?.({ ...args, canvasElement: grid });
    }
  };
}
