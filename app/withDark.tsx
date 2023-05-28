import { Decorator } from "@storybook/react";

const withDark: Decorator = (Story) => {
  return (
    <div className="dark">
      <Story></Story>
    </div>
  );
};

export default withDark;
