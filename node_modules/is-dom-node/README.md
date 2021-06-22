# is-dom-node

<a href="https://travis-ci.org/jlmakes/is-dom-node"> <img src="https://img.shields.io/travis/jlmakes/is-dom-node.svg" alt="Build status"> </a>
<a href="https://coveralls.io/github/jlmakes/is-dom-node"> <img src="https://img.shields.io/coveralls/jlmakes/is-dom-node.svg" alt="Coverage"> </a>
<a href="https://www.npmjs.com/package/is-dom-node"> <img src="https://img.shields.io/npm/v/is-dom-node.svg" alt="Version"> </a>
<img src="https://img.shields.io/badge/min+gzip-0.2KB-blue.svg" alt="0.2KB min+gzip">
<a href="https://github.com/jlmakes/is-dom-node/blob/master/LICENSE"> <img src="https://img.shields.io/badge/license-MIT-1283c3.svg" alt="MIT License"> </a>

## Installation

### Browser

A simple and fast way to get started is to include this script on your page:

```html
<script src="https://unpkg.com/is-dom-node"></script>
```

This will create the global variable `isDomNode`.

### Module

```bash
npm install is-dom-node
```

#### CommonJS

```js
const isDomNode = require('is-dom-node')
```

#### ES2015

```js
import isDomNode from 'is-dom-node'
```

## Usage

```js
const node = document.querySelector('#cake')
isDomNode(node)
// => true

const html = '<div id="cake"></div>'
isDomNode(html)
// => false
```
