import { ARTICLES } from "@/app/Article";
import Article from "@/app/article/[id]/Article";
import Layout from "@/app/layout";
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
    children: <Article article={ARTICLES[0]}></Article>,
  },
};

export const BoldItalic: Story = {
  args: {
    children: <Article article={ARTICLES[1]}></Article>,
  },
};

export const List: Story = {
  args: {
    children: <Article article={ARTICLES[2]}></Article>,
  },
};

export const Blockquote: Story = {
  args: {
    children: <Article article={ARTICLES[3]}></Article>,
  },
};

export const Table: Story = {
  args: {
    children: <Article article={ARTICLES[4]}></Article>,
  },
};

export const Video: Story = {
  args: {
    children: <Article article={ARTICLES[5]}></Article>,
  },
};