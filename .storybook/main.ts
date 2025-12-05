import type { StorybookConfig } from '@storybook/react-vite';
import { getDefaultLibFileName } from 'typescript';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
  ],
  "framework": "@storybook/react-vite",
  "docs": { defaultName: "Documentation" }
};
export default config;