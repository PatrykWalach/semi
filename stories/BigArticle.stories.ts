import { ARTICLES } from "@/components/Article";
import { BigArticle } from "@/components/BigArticle";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof BigArticle> = {
  title: "Home/BigArticle",
  component: BigArticle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    chromatic: { viewports: [640, 768, 1280] },
  },
};

export default meta;
type Story = StoryObj<typeof BigArticle>;

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