import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    chromatic: { viewports: [640, 768, 1024, 1280, 1536] },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        sm: { name: "sm", styles: { width: "640px", height: "100%" } },
        md: { name: "md", styles: { width: "768px", height: "100%" } },
        lg: { name: "lg", styles: { width: "1024px", height: "100%" } },
        xl: { name: "xl", styles: { width: "1280px", height: "100%" } },
        "2xl": { name: "2xl", styles: { width: "1536px", height: "100%" } },
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
