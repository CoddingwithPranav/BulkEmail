// packages/eslint-config/express.js
import nodePlugin from "eslint-plugin-node"; // optional but nice
import { config as baseConfig } from "./base.js";
import globals from "globals";

export const expressConfig = [
  ...baseConfig,

  // Node.js / Express environment
  {
    languageOptions: {
      globals: {
        ...globals.node, // process, __dirname, etc.
      },
    },
  },

  // Optional: extra Node.js best practices
  {
    plugins: {
      node: nodePlugin,
    },
    rules: {
      "node/no-unsupported-features/es-syntax": "off", // TS handles this
      "node/no-missing-import": "off",                 // TS handles this
      "no-console": "warn",
    },
  },
];

export default expressConfig;