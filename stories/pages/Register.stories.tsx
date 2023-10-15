import RegisterPage from "@/app/register/RegisterPage";
import RegisterLayout from "@/app/register/RegisterLayout";
import Layout from "@/app/Root";
import type { Meta, StoryObj } from "@storybook/react";
// import Home from "@/app/page";

const meta: Meta<typeof Layout> = {
  title: "Pages/Register",
  component: RegisterPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    grid: "fullscreen",
    chromatic: { viewports: [640, 1280] },
  },
  decorators: [
    (Story) => (
      <Layout>
        <RegisterLayout>
          <Story></Story>
        </RegisterLayout>
      </Layout>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {};

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
