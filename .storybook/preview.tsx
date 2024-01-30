import type { Preview } from "@storybook/react";
import React from "react";
import ThemeRegistry from "../src/app/components/ThemeRegistry";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeRegistry>
        <Story />
      </ThemeRegistry>
    ),
  ],
};

export default preview;
