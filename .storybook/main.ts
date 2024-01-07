import type { StorybookConfig } from "@storybook/nextjs";
import StylexPlugin from '@stylexjs/webpack-plugin';
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
      new StylexPlugin({
        filename: "styles.[contenthash].css",
        // get webpack mode and set value for dev
        dev: true,
        // Use statically generated CSS files and not runtime injected CSS.
        // Even in development.
        // @ts-ignore
        runtimeInjection: false,
        // optional. default: 'x'
        classNamePrefix: "x",
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      }),
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
