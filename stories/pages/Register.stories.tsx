import Layout from "@/app/.Root";
import RegisterLayout from "@/app/register/RegisterLayout";
import { RegisterFieldset as RegisterPage } from "@/app/register/RegisterPage";
import type { Meta, StoryObj } from "@storybook/react";
// import Home from "@/app/page";

const meta: Meta<typeof RegisterPage> = {
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
type Story = StoryObj<typeof RegisterPage>;

export const Default: Story = {
  args: { fields: { username: "User", email: "" } },
};

export const Disabled: Story = { args: { ...Default.args, disabled: true } };

export const Error: Story = {
  args: {
    ...Default.args,
    errors: {
      username: "Username taken",
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
