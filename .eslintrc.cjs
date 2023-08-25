/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:vuejs-accessibility/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Piano"],
      },
    ],
    "vuejs-accessibility/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
        true: false,
      },
    ],
  },
};
