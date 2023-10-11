import { ARTICLES } from "@/components/Article";
import { Articles } from "@/components/Articles";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Articles> = {
  title: "Home/Articles",
  component: Articles,
  // subcomponents: { Article: Article, BigArticle: BigArticle },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout

    chromatic: { viewports: [640, 768, 1280] },
  },
};

export default meta;
type Story = StoryObj<typeof Articles>;

export const Default: Story = {
  args: {
    articles: ARTICLES,
  },
};

export const NoArticles: Story = {
  args: {
    articles: [],
  },
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