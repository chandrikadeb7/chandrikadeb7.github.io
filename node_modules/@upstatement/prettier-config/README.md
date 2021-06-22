# prettier-config

[![npm version](https://badge.fury.io/js/%40upstatement%2Fprettier-config.svg)](https://badge.fury.io/js/%40upstatement%2Fprettier-config)

Upstatement's [`prettier`](https://prettier.io) configuration.

Pairs well with our [`ESLint configuration`](https://www.npmjs.com/package/@upstatement/eslint-config).

## Installation

### npm

```sh
npm install --save-dev @upstatement/prettier-config
```

If you don't have it installed already, also install `prettier` as a devDependency.

```sh
npm install --save-dev prettier
```

### yarn

```sh
yarn add --dev @upstatement/prettier-config prettier
```

## Usage

We export two ESLint configurations for your usage:

1. [Default (2 space)](#default-config)
2. [Four Spaces](#four-spaces-config)

### Default Config

Create a `prettier.config.js` file at the root of your project that contains:

```js
module.exports = require('@upstatement/prettier-config');
```

### Four Spaces Config

If you prefer 4 spaces instead of 2, use this in your `prettier.config.js` instead:

```js
module.exports = require('@upstatement/prettier-config/four-spaces');
```

## Pre-commit Hook

As another line of defense, if you want Prettier to automatically fix your errors on commit, you can use [`pretty-quick`](https://github.com/azz/pretty-quick) with [`husky`](https://github.com/typicode/husky), which manage git hooks.

1.  `npm install --save-dev prettier pretty-quick husky`
2.  Update your `package.json` like this:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  }
}
```

If you already have `lint-staged` running [ESLint](https://github.com/Upstatement/eslint-config#pre-commit-hook) on precommit, you can just add `pretty-quick` on top of it:

```json
{
  "scripts": {
    "precommit": "lint-staged && pretty-quick --staged"
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
}
```

## [Editor Integration](https://prettier.io/docs/en/editors.html)

### Visual Studio Code

1.  Install Prettier extension: `View → Extensions` then find and install Prettier - Code formatter
2.  Reload the editor
3.  In your user settings `Code -> Preferences -> Settings` add `editor.formatOnSave: true`

### Sublime Text 3

[https://packagecontrol.io/packages/JsPrettier](https://packagecontrol.io/packages/JsPrettier)

### Atom

[https://atom.io/packages/prettier-atom](https://atom.io/packages/prettier-atom)

## How to publish to npm

Read npm's docs on [How to Update a Package](https://docs.npmjs.com/getting-started/publishing-npm-packages#how-to-update-a-package).

1. `npm login`
   - Make sure you're logged into Upstatement's npm account with the credentials from 1pass. `npm whoami` will tell you if you're already logged in.
2. `npm version <update_type>`
   - `update_type` can be `patch`, `minor`, or `major`. If you don't know which one to use, go read about [semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning).
3. `npm publish`

## Enforced Rules

Check out all of Prettier's [configuration options](https://prettier.io/docs/en/options.html).

- **Print Width**

  Line wrap at 100 characters.

- **Tab Width**

  2 spaces per indentation-level.

- **Tabs**

  Indent lines with spaces, not tabs.

- **Semicolons**

  Always print semicolons at the ends of statements.

  ```js
  const greeting = 'hi';
  ```

- **Quote**

  Use single quotes instead of double quotes.

  ```js
  const quote = 'single quotes are better';
  ```

- **Trailing Commas**

  Use trailing commas wherever possible.

  ```js
  const obj = {
    a: 'hi',
    b: 'hey',
  };
  ```

- **Bracket Spacing**

  Print spaces between brackets in object literals.

  ```js
  {
    foo: bar;
  }
  ```

- **JSX Brackets**

  Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).

  ```jsx
  <button className="prettier-class" id="prettier-id" onClick={this.handleClick}>
    Click Here
  </button>
  ```

- **Arrow Function Parentheses**

  Omit parens when possible.

  ```js
  x => x;
  ```
