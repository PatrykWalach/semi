import type { Meta, StoryObj } from "@storybook/react";
import { ARTICLES } from "../app/Article";
import { Articles } from "../app/Articles";
import withDark from "../app/withDark";
 
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

export const Dark: Story = {
  ...Default,
  decorators: [withDark],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
