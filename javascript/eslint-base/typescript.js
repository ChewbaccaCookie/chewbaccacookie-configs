/* eslint-disable unicorn/prefer-module */

const mainConfig = require("./main-config.js");

module.exports = {
    ...mainConfig,
    extends: ["plugin:@typescript-eslint/recommended", ...mainConfig.extends],
    plugins: ["@typescript-eslint", "deprecation", ...mainConfig.plugins],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ...mainConfig.parserOptions,
        project: "./tsconfig.json",
    },
    rules: {
        ...mainConfig.rules,
        "deprecation/deprecation": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": 1,
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "import/extensions": ["error", "ignorePackages"],
    },
};
