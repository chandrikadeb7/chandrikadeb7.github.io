# is-dom-node-list

<a href="https://travis-ci.org/jlmakes/is-dom-node-list"> <img src="https://img.shields.io/travis/jlmakes/is-dom-node-list.svg" alt="Build status"> </a>
<a href="https://coveralls.io/github/jlmakes/is-dom-node-list"> <img src="https://img.shields.io/coveralls/jlmakes/is-dom-node-list.svg" alt="Coverage"> </a>
<a href="https://www.npmjs.com/package/is-dom-node-list"> <img src="https://img.shields.io/npm/v/is-dom-node-list.svg" alt="Version"> </a>
<img src="https://img.shields.io/badge/min+gzip-0.3KB-blue.svg" alt="0.3KB min+gzip">
<a href="https://github.com/jlmakes/is-dom-node-list/blob/master/LICENSE"> <img src="https://img.shields.io/badge/license-MIT-1283c3.svg" alt="MIT License"> </a>

## Installation

### Browser

A simple and fast way to get started is to include this script on your page:

```html
<script src="https://unpkg.com/is-dom-node-list"></script>
```

This will create the global variable `isDomNodeList`.

### Module

```bash
npm install is-dom-node-list
```

#### CommonJS

```js
const isDomNodeList = require('is-dom-node-list')
```

#### ES2015

```js
import isDomNodeList from 'is-dom-node-list'
```

## Usage

```js
const nodeList = document.querySelectorAll('.cookies')
isDomNodeList(nodeList)
// => true

const nodeArray = Array.prototype.slice.call(nodeList)
isDomNodeList(nodeArray)
// => false
```
