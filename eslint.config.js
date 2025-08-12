import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin, //  плагин для импортов
    },
    rules: {
      'no-multiple-empty-lines': ['error', { max: 1 }], // Удаляет двойные пустые строки
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always", // Пустые строки между группами
          pathGroups: [
            {
              pattern: "use*",
              group: "internal",
              position: "before", // Располагаем перед другими внутренними импортами
              patternOptions: {
                matchBase: true,
              },
            },
            {
              pattern: "*.{css,scss,less,module.scss}",
              group: "index",
              position: "after",
              patternOptions: {
                matchBase: true,
              },
            },
          ],
          pathGroupsExcludedImportTypes: ["type"],
          distinctGroup: false, // Позволяет type-импортам быть рядом с обычными
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
