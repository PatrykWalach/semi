import type { Meta, StoryObj } from "@storybook/react";
import { ARTICLES, Article } from "../app/Article";
 
const meta: Meta<typeof Article> = {
  title: "Home/Article",
  component: Article,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof Article>;



export const Default: Story = {
  args: { article: ARTICLES[0] },
};


export const Md: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "md",
    },
  },
};

export const Sm: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
};