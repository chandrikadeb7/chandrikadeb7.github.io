module.exports = {
  "extends": [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "./index.js",
  ],
  "plugins": ["jsx-a11y"],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "rules": {
    "react/no-unescaped-entities": ["error", { "forbid": [">", "\"", "}"] }]
  }
}
