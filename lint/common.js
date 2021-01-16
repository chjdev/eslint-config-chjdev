module.exports = {
  root: true,
  plugins: ["prettier", "import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "prettier/@typescript-eslint",
  ],
  settings: {
    // required by import plugin for typescript
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-use-before-define": ["error", { classes: false }],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "import/no-unused-modules": "off",
    "import/no-deprecated": "off",
  },
};
