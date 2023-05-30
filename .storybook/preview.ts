import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import "../app/globals.css";
import withTheme from "../app/withTheme";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme for components",
      defaultValue: "stacked",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "stacked", title: "Stacked (default)" },
          { value: "side-by-side", title: "Side by side" },
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
    backgrounds: {
      description: "Background",
      defaultValue: "surface",
      toolbar: {
        icon: "photo",
        items: ["clear", "surface", "inverse-surface"],
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    backgrounds: {
      values: {
        surface: {
          background: "rgb(var(--surface))",
          color: "rgb(var(--on-surface))",
        },
        "inverse-surface": {
          background: "rgb(var(--inverse-surface))",
          color: "rgb(var(--inverse-on-surface))",
        },
      },
    },
    layout: "fullscreen",
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
