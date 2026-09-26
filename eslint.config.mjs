import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: "readonly",
      },
    },
  },

  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
