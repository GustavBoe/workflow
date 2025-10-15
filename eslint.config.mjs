import pluginJs from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
    },
    rules: {
      "no-unused-vars": ["error", { args: "all" }],
    },
  },
]);
