import pluginJs from "@eslint/js";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

import { defaultIgnoreConfig } from "./defaults.js";
import { jsBestPractiseRules } from "./rules/js/best-practise.js";
import { jsErrorsRules } from "./rules/js/errors.js";
import { jsNodeRules } from "./rules/js/node.js";
import { jsPluginRules } from "./rules/js/plugins.js";
import { jsStyleRules } from "./rules/js/style.js";
import { jsVariableRules } from "./rules/js/variables.js";

export const jsConfig = {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
        globals: { ...globals.builtin, ...globals.node },
    },
    plugins: {
        "unused-imports": unusedImports,
        "prefer-arrow-functions": preferArrowFunctions,
        "simple-import-sort": simpleImportSort,
    },
    rules: {
        ...jsNodeRules,
        ...jsStyleRules,
        ...jsErrorsRules,
        ...jsVariableRules,
        ...jsBestPractiseRules,
        ...jsPluginRules,
    },
};

export const jsExtensions = [
    pluginJs.configs.recommended,
    eslintPluginPrettierRecommended,
    eslintPluginUnicorn.configs["flat/recommended"],
];

export default [...jsExtensions, jsConfig, defaultIgnoreConfig];
