import type { Meta, StoryObj } from "@storybook/react";
import { Articles } from "../app/Articles";
import { ARTICLES } from "../app/page";

const meta: Meta<typeof Articles> = {
  title: "Home/Articles",
  component: Articles,
  // subcomponents: { Article: Article, BigArticle: BigArticle },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof Articles>;

export const Default: Story = {
  args: {
    articles: ARTICLES,
  },
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