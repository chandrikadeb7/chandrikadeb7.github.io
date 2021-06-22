module.exports = {
  "extends": [
    "plugin:vue/recommended",
    "./index.js",
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "sourceType": "module",
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "rules": {
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 2,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ]
  }
}
