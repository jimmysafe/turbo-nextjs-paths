import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    typescript: true,
    react: true,
    formatters: {
      css: true,
      html: true,
    },
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/src/components/ui/*", "**/payload-types.ts", "**/migrations/**/*", "**/generated/**/*"],
  },
  {
    rules: {
      "react/prefer-destructuring-assignment": ["off"],
      "react-refresh/only-export-components": ["off"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": ["error"],
      "unicorn/filename-case": [
        "warn",
        {
          case: "kebabCase",
          ignore: ["README.md", 'importMap.js'],
        },
      ],
    },
  }
);
