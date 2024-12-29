import globals from "globals";
import { config, configs } from "typescript-eslint";

import { defaultIgnoreConfig } from "./defaults.js";
import { jsExtensions } from "./js-config.js";
import { jsReactConfig } from "./js-react-config.js";
import { tsConfig } from "./ts-config.js";

export const tsReactConfig = {
    ...tsConfig,
    languageOptions: {
        ...tsConfig.languageOptions,
        globals: { ...globals.builtin, ...globals.browser, React: "readonly" },
        parserOptions: {
            tsconfigDirName: import.meta.dirname,
            ecmaFeatures: {
                jsx: true,
            },
            projectService: {},
        },
    },
    plugins: {
        ...jsReactConfig.plugins,
    },
    settings: { react: { version: "detect" } },
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    extends: [...jsExtensions],
    rules: {
        ...jsReactConfig.rules,
        ...tsConfig.rules,
    },
};
export default config(...configs.recommended, tsReactConfig, defaultIgnoreConfig);
