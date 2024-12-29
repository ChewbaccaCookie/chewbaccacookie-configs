import { config, configs } from "typescript-eslint";

import { defaultIgnoreConfig } from "./defaults.js";
import { jsConfig, jsExtensions } from "./js-config.js";
import { typescriptRules } from "./rules/typescript.js";

export const tsConfig = {
    ...jsConfig,
    languageOptions: {
        ...jsConfig.languageOptions,
        parserOptions: {
            tsconfigDirName: import.meta.dirname,
            projectService: {},
        },
    },
    files: ["**/*.{js,mjs,cjs,ts}"],
    extends: jsExtensions,
    rules: {
        ...jsConfig.rules,
        ...typescriptRules,
    },
};

export default config(...configs.recommended, tsConfig, defaultIgnoreConfig);
