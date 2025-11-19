// packages/eslint-config/react.js
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { config as baseConfig } from "./base.js";

export const reactConfig = [
  ...baseConfig,

  // React recommended rules (flat config era)
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: { version: "detect" }, // auto-detects React 17+ (no import needed)
    },
  },

  // React Hooks rules
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  // Optional: extra nice React rules
  {
    rules: {
      "react/prop-types": "off",        // you’re using TypeScript
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "off",    // optional, many people dislike it
      "react/react-in-jsx-scope": "off", // not needed in React 17+
    },
  },
];

export default reactConfig;