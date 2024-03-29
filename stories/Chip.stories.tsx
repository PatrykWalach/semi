import { Chip, ChipIcon } from "@/components/Chip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
  title: "Search/Chip",
  component: Chip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: <><ChipIcon> <svg
    className="w-3.5 h-3.5 -ms-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg></ChipIcon>new</>},
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



export const IconLast: Story = {
  args: { children: <>new<ChipIcon> <svg
    className="w-3.5 h-3.5 -ms-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg></ChipIcon></>},
};