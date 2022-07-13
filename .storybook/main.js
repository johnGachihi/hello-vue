const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const { mergeConfig } = require("vite")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],

  viteFinal(config) {
    return mergeConfig(config, {
      resolve: { alias: { "@": "/src" } }
    })
  },

  core: { builder: "@storybook/builder-vite" }
};
