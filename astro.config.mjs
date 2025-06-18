// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { cjsInterop } from "vite-plugin-cjs-interop";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      experimentalDisableStreaming: true,
    }),
  ],
  vite: {
    plugins: [
      cjsInterop({
        dependencies: ["@fluentui/react-components"],
      }),
    ],
  },
});
