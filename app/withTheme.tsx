import { Decorator, StoryContext, StrictArgs } from "@storybook/react";
import { ReactNode } from "react";

export const withDir: Decorator = (Story, context) => {
  let dir = context.parameters.dir ?? context.globals.dir ?? "ltr";

  return (
    <div dir={dir}>
      <Story></Story>
    </div>
  );
};

import { createRemixStub } from "@remix-run/testing";

export const withRouter: Decorator = (Story, context) => {
  const Stub = createRemixStub([
    {
      path: "*",
      Component: Story,
    },
  ]);

  return (
    <Stub
      initialEntries={[context.parameters?.nextjs?.navigation?.pathname ?? "/"]}
    ></Stub>
  );
};

import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import { dark } from "./tokens.stylex";

const withTheme: Decorator = (Story, context) => {
  let theme = context.parameters.theme ?? context.globals.theme ?? "light";

  return (
    <div className={theme === "side-by-side" ? "grid-cols-2 grid" : "grid"}>
      {theme !== "dark" && (
        <Wrapper context={context}>
          <Story></Story>
        </Wrapper>
      )}
      {theme !== "light" && (
        <Wrapper context={context} style={dark} className="dark">
          <Story></Story>
        </Wrapper>
      )}
    </div>
  );
};

const styles = stylex.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
    display: "grid",
  },
  background: (background, color) => ({ background, color }),

  padded: {
    padding: "1rem",
  },
});

function Wrapper({
  context,
  className,
  style,
  ...props
}: {
  context: StoryContext<StrictArgs>;
  style?: StyleXStyles;
  children: ReactNode;
  className?: string;
}) {
  const layout = context.parameters.grid ?? "padded";

  const background =
    context.parameters.backgrounds.values[
      context.parameters.backgrounds?.default ??
        context.globals.backgrounds ??
        "surface"
    ];

  return (
    <div className={className}>
      <div
        data-testid="grid"
        {...props}
        {...stylex.props(
          styles.background(background.background, background.color),
          context.parameters.layout === "centered" && styles.centered,
          layout === "padded" && styles.padded,
          style
        )}
      ></div>
    </div>
  );
}

export default withTheme;
