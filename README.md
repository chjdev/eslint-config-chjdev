# General

This is a repo that contains my opinionated typescript setup, complete with eslint and prettier rules.

# Installation

Install as a dev dependency using `yarn` or `npm`.
```yarn add --dev eslint-config-chjdev```

`eslint` is used as a peer dependency, so add it to your project.

Optional peer dependencies are used for `react` and `react-native` configs.

# Configuration

Configure eslint and prettier by extending the provided configs (or using them directly). For example in a `package.json`:
```json
{
  ...
  "prettier": "eslint-config-chjdev/prettier",
  "eslintConfig": {
    "extends": "chjdev/lint/react",
    "env": {
      "browser": false,
      "node": true
    }
  }
}
```

Set up a tsconfig file that extends from the provided base configs, e.g.:
```
{
  "extends": "eslint-config-chjdev/tsconfig/react.json",
  "compilerOptions": {
    "target": "es2017",
    "noEmit": false,
    "baseUrl": "./src"
  }
}
```

*Note: I would have added baseURL to the shared config but the eslint import plugin doesn't like it*
