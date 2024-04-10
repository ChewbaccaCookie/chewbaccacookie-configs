# 🍪 ChewbaccaCookie-Configs 🍪

This repository contains a variety of configuration files that can be used in development projects. Currently, there are configuration files/packages for Renovate, Prettier, and Eslint. Each configuration file is designed to be easily integrated into your project.

## 📦 Configs / Packages

- **Renovate**
- **Prettier**
- **Eslint**
  - Javascript
  - Typescript
- **React**
  - Javascript
  - Typescript

## 📦 Installation

### Prettier

Install the Prettier configuration package by running:

```bash
npm i -D @chewbaccacookie/prettier-config
```

Then, create a `.prettierrc` file in your project root with the following entry:

```json
"@chewbaccacookie/prettier-config"
```

### Eslint

#### Vanilla Javascript

For non-React projects, install the Eslint configuration package by running:

```bash
npm i -D @chewbaccacookie/eslint-config-base
```

Now create a `.eslintrc.cjs` file in your project root with the following entry:

```javascript
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "extends": "@chewbaccacookie/base"
    // or
    "extends": "@chewbaccacookie/base/typescript"
}
```

#### React Javascript

For React projects, use:

```bash
npm i -D @chewbaccacookie/eslint-config-react
```

Now create a `.eslintrc.cjs` file in your project root with the following entry:

```javascript
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "extends": "@chewbaccacookie/react"
    // or
    "extends": "@chewbaccacookie/react/typescript"
}
```

### Renovate

You can reuse the Renovate configuration file by adding the following to your `renovate.json` file:

```json
{
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["github>ChewbaccaCookie/chewbaccacookie-configs:renovate-config"]
}
```

## 📂 Examples

In the `examples` directory, you can find Javascript and Typescript examples for Eslint and React.

## 🙌 Contributing

Contributions are welcome! If you have a configuration file you'd like to add, please feel free to make a pull request.

## 📃 License

This project is licensed under the MIT License.

## 📧 Contact

If you have any questions or run into any issues, please open an issue in this repository.

Happy coding! 🚀
