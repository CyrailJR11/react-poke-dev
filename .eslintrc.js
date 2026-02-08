module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ["eslint:recommended", "plugin:react/recommended"],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react"],

  overrides: [
    {
      files: ["webpack.config.js", "vercel.json", "*.config.js"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],

  settings: {
    react: { version: "detect" },
  },
};
