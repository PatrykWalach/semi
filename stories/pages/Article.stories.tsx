import Layout from "@/app/Root";
import ArticlePage from "@/app/article/[id]/ArticlePage";
import { ARTICLES } from "@/components/Article";
import type { Meta, StoryObj } from "@storybook/react";

// import Home from "@/app/page";

const meta: Meta<typeof Layout> = {
  title: "Pages/Article",
  component: Layout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    grid: "fullscreen",
    chromatic: { viewports: [640, 1280] },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Image: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[0]}></ArticlePage>,
  },
};

export const Dark: Story = {
  ...Image,
  parameters: {
    theme: "dark",
  },
};

export const Rtl: Story = {
  ...Image,
  parameters: {
    dir: "rtl",
  },
};

export const BoldItalic: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[1]}></ArticlePage>,
  },
};

export const List: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[2]}></ArticlePage>,
  },
};

export const Blockquote: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[3]}></ArticlePage>,
  },
};

export const Table: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[4]}></ArticlePage>,
  },
};

export const Video: Story = {
  args: {
    children: <ArticlePage article={ARTICLES[5]}></ArticlePage>,
  },
};