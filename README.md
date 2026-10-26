# 🍪 ChewbaccaCookie-Configs 🍪

This repository contains a variety of configuration files that can be used in development projects. Currently, there are configuration files/packages for Renovate, Prettier, and Eslint. Each configuration file is designed to be easily integrated into your project.

## 📦 Configs / Packages

- **Renovate**
- **Prettier**
- **Eslint**
  - Base (Javascript and Typescript)
  - React (Javascript and Typescript)

## 📲 Installation

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

The ESLint configuration requires Node.js 20.19+, 22.13+, or 24+ and supports ESLint 9 and TypeScript 4.8.4 through 6.0. Use Node.js 24 to run this repository's tests. ESLint 10 and TypeScript 7 are pending support from the React ESLint plugin and typescript-eslint, respectively.

Install the necessary packages:

```bash
npm install -D eslint@9 prettier @chewbaccacookie/eslint-config @chewbaccacookie/prettier-config@1.3
```

Create `eslint.config.js` in your project root and add the appropriate configuration:

```javascript
// Base configuration for javascript
import config from "@chewbaccacookie/eslint-config";

export default [...config];

// Base configuration for typescript
import config from "@chewbaccacookie/eslint-config/typescript";

export default [...config];

// For React projects
import config from "@chewbaccacookie/eslint-config/react";

export default [...config];

// For React projects with Typescript
import config from "@chewbaccacookie/eslint-config/react-typescript";

export default [...config];
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
