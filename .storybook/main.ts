 
import type { StorybookConfig } from '@storybook/react-vite';

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
    name: '@storybook/react-vite',
 options:{}
  },
  docs: {
    autodocs: "tag",
  },viteFinal(config){
    return config
  }
};

export default config;
 