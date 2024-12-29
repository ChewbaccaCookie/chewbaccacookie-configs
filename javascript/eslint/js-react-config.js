import reactPlugin from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

import { defaultIgnoreConfig } from "./defaults.js";
import { jsConfig, jsExtensions } from "./js-config.js";
import { reactRules } from "./rules/react.js";

export const jsReactConfig = {
    ...jsConfig,
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
        ...jsConfig.languageOptions,
        globals: { ...globals.builtin, ...globals.browser, React: "readonly" },
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    plugins: {
        ...jsConfig.plugins,
        react: reactPlugin,
        "react-refresh": reactRefresh,
    },
    settings: { react: { version: "detect" } },
    rules: {
        ...jsConfig.rules,
        ...reactPlugin.configs.flat.recommended.rules,
        ...reactRules,
    },
};

export default [...jsExtensions, jsReactConfig, defaultIgnoreConfig];
