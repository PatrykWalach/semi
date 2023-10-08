import { ARTICLES, Article } from "@/components/Article";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Article> = {
  title: "Home/Article",
  component: Article,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
  args: { article: ARTICLES[0] },
};


export const Dark: Story = {
  ...Default,
  parameters: {
    theme: "dark",
  },
};

export const Rtl: Story = {
  ...Default,
  parameters: {
    dir: "rtl",
  },
};