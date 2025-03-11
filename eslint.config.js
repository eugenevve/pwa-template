import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  ...tseslint.config(
    {
      ignores: ["dist"],
    },
    {
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        react: react,
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
        "@import": importPlugin,
        "@stylistic": stylistic,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        eqeqeq: ["warn", "smart"],
        "array-callback-return": "off",
        "no-unused-expressions": "warn",
        "no-unused-vars": "off",
        "react/jsx-key": "error",
        "react/prop-types": "off",
        "@import/order": [
          "warn",
          {
            groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/prefer-promise-reject-errors": "off",
        "@stylistic/quotes": ["warn", "double", { allowTemplateLiterals: true }],
        "@stylistic/semi": ["warn", "always"],
        "@stylistic/space-before-function-paren": "off",
        "@stylistic/comma-dangle": "off",
        "@stylistic/multiline-ternary": "off",
      },
    }
  ),
  eslintConfigPrettier,
];
