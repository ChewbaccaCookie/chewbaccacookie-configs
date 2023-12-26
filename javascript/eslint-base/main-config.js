/* eslint-disable unicorn/prefer-module */

const prettierConfig = require("@chewbaccacookie/prettier-config");

module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ["prettier", "plugin:prettier/recommended", "plugin:unicorn/recommended", "plugin:import/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
    },
    plugins: ["unicorn", "import", "unused-imports", "prefer-arrow-functions", "simple-import-sort"],
    root: true,
    rules: {
        curly: ["error", "all"],
        indent: "off",
        quotes: ["error", "double", { avoidEscape: true }],
        semi: ["error", "always"],
        "no-console": "error",

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",

        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/named": "off",

        "prefer-arrow-functions/prefer-arrow-functions": [
            "warn",
            {
                classPropertiesAllowed: false,
                disallowPrototype: false,
                returnStyle: "unchanged",
                singleReturnOnly: false,
            },
        ],

        "prettier/prettier": ["error", prettierConfig],

        "unicorn/consistent-function-scoping": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-null": "off",
        "unicorn/no-useless-spread": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/template-indent": "off",

        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["warn", { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }],
    },
};
