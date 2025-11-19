// packages/eslint-config/base.js
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

export const config = tseslint.config(
  // Core recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Turbo rules (catches undeclared env vars, etc.)
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },

  // Optional: turn all errors → warnings (great for monorepos)
  {
    plugins: {
      "only-warn": onlyWarn,
    },
  },

  // Prettier must be LAST
  eslintConfigPrettier,

  // Global ignores
  {
    ignores: [
      "dist/**",
      "build/**",
      "node_modules/**",
      ".turbo/**",
      "**/*.d.ts",
    ],
  },
);

export default config;