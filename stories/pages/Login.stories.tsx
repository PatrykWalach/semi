import { LoginFieldset as LoginPage } from "@/app/login/LoginPage";
import RegisterLayout from "@/app/register/RegisterLayout";
import Layout from "@/app/Root";
import type { Meta, StoryObj } from "@storybook/react";
// import Home from "@/app/page";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/Login",
  component: LoginPage,
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Story></Story>
          </form>
        </RegisterLayout>
      </Layout>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: { fields: { username: "User" } },
};

export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const Error: Story = {
  args: {
    ...Default.args,
    errors: {
      username: "Username invalid",
    },
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
