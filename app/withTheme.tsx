import { Decorator, StoryContext, StrictArgs } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import { ReactNode } from "react";

const withTheme: Decorator = (Story, context) => {
  let theme = context.globals.theme;

  if (isChromatic()) {
    theme = "stacked";
  }

  return (
    <div className={theme === "side-by-side" ? "grid-cols-2 grid" : "grid"}>
      {theme !== "dark" && (
        <Wrapper context={context} className="">
          <Story></Story>
        </Wrapper>
      )}
      {theme !== "light" && (
        <Wrapper context={context} className="dark">
          <Story></Story>
        </Wrapper>
      )}
    </div>
  );
};

function Wrapper({
  context,
  ...props
}: {
  context: StoryContext<StrictArgs>;
  className: string;
  children: ReactNode;
}) {
  const layout = context.parameters.grid ?? "padded";

  const background =
    context.parameters.backgrounds?.default ??
    context.globals.backgrounds ??
    "surface";

  return (
    <div
      data-testid="grid"
      style={{
        ...(background !== "clear" && {
          background: `rgb(var(--${background}))`,
          color: `rgb(var(--on-${background}))`,
        }),
        ...(context.parameters.layout === "centered" && {
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
        }),
        padding: layout === "padded" ? "1rem" : "",
      }}
      {...props}
    ></div>
  );
}

export default withTheme;
