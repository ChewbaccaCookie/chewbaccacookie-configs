/* eslint-disable unicorn/prefer-module */

const mainConfig = require("@chewbaccacookie/eslint-config-base/typescript.js");
const additionalRules = require("./rules.js");

module.exports = {
    ...mainConfig,
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ...mainConfig.parserOptions,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [...mainConfig.plugins, "react", "jsx-a11y", "react-refresh"],
    extends: [...mainConfig.extends, "plugin:jsx-a11y/recommended", "plugin:react-hooks/recommended"],
    rules: {
        ...mainConfig.rules,
        ...additionalRules,
    },
};
