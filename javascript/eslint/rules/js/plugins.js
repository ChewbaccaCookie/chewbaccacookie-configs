import prettierConfig from "@chewbaccacookie/prettier-config";

export const jsPluginRules = {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
            classPropertiesAllowed: true,
            disallowPrototype: true,
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
    "unicorn/no-useless-undefined": "off",

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["warn", { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }],
};
