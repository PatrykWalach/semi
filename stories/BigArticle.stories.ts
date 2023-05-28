import type { Meta, StoryObj } from "@storybook/react";
import { BigArticle } from "../app/BigArticle";
import { ARTICLES } from "../app/page";

const meta: Meta<typeof BigArticle> = {
  title: "Home/BigArticle",
  component: BigArticle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export default meta;
type Story = StoryObj<typeof BigArticle>;

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

