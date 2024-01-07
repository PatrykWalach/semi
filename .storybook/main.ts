import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

 

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, options) => {
    const plugins: any[] = [
      ...(config.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve?.extensions,
      }),
    ];

    config.resolve = {
      ...config.resolve,
      plugins,
    };
    return config;
  },
};
export default config;
