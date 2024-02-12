import Layout from "@/app/.Root";
import SearchPage from "@/app/search/SearchPage";
import { ARTICLES } from "@/components/Article";
import type { Meta, StoryObj } from "@storybook/react";
// import Home from "@/app/page";

const meta: Meta<typeof Layout> = {
  title: "Pages/Search",
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

export const Default: Story = {
  args: {
    children: (
      <SearchPage
        articles={ARTICLES}
        searchParams={
          new URLSearchParams([
            ["tag", "max"],
            ["tag", "new"],
          ])
        }
      ></SearchPage>
    ),
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
