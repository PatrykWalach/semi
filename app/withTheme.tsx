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


export const withRouter:Decorator =(Story, context)=>{
  const Stub =  createRemixStub([{
    path:'/',
    Component: Story,  
  }])

  return <Stub></Stub>
}

const withTheme: Decorator = (Story, context) => {
  let theme = context.parameters.theme ?? context.globals.theme ?? "light";

  return (
    <div className={theme === "side-by-side" ? "grid-cols-2 grid" : "grid"}>
      {theme !== "dark" && (
        <Wrapper context={context} className="light">
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
    context.parameters.backgrounds.values[
      context.parameters.backgrounds?.default ??
        context.globals.backgrounds ??
        "surface"
    ];

  return (
    <div
      data-testid="grid"
      style={{
        ...background,
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
