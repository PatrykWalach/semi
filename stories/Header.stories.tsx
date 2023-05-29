import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Header } from "../app/Header";
import { HeaderLink } from "../app/HeaderLink";

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
  decorators: [
    (Story) => (
      <div
        style={{
          display: "contents",
          background: "mageneta",
        }}
      >
        <Story></Story>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: (
      <>
        <HeaderLink href="#" active>
          Home
        </HeaderLink>
        <HeaderLink href="#">About</HeaderLink>
      </>
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
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    for (const grid of canvas.getAllByTestId("grid")) {
      await userEvent.click(
        within(grid).getByRole("button", {
          name: "Open main menu",
        })
      );
    }
  },
};
