<p align="center">
	<img src="https://jlmak.es/logos/svg/tealight.svg" alt="Flaming tea light" width="120px">
</p>
<br>
<p align="center">
	<img src="https://jlmak.es/logos/svg/tealight-logotype.svg" alt="Tealight" width="130px">
</p>

<p align="center">DOM queries that always return an array.</p>

<p align="center">
	<a href="https://travis-ci.org/jlmakes/tealight"><img src="https://img.shields.io/travis/jlmakes/tealight.svg" alt="Build status"></a>
	<a href="https://coveralls.io/github/jlmakes/tealight"><img src="https://img.shields.io/coveralls/jlmakes/tealight.svg" alt="Coverage"></a>
	<a href="https://www.npmjs.com/package/tealight"><img src="https://img.shields.io/npm/v/tealight.svg" alt="Version"></a>
	<a href="https://github.com/jlmakes/tealight/blob/master/src/index.js"><img src="https://img.shields.io/badge/min+gzip-0.4KB-blue.svg" alt="0.4KB min+gzip"></a>
	<a href="https://github.com/jlmakes/tealight/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
</p>

<p align="center">
	<a href="https://saucelabs.com/u/tealight">
		<img src="https://saucelabs.com/browser-matrix/tealight.svg" alt="Browser compatibility matrix" width="100%">
	</a>
</p>

<br>

<br>

## Introduction

Modern browsers enable us to perform DOM queries natively, e.g:

```js
let cookies = document.querySelectorAll(".cookie");
```

But we all want to loop over the returned elements. So in practice, we’ve got to do a little more work, particularly converting the resulting `NodeList` to an array, e.g:

```js
let cookies;
try {
  let query = document.querySelectorAll(".cookie");
  cookies = Array.prototype.slice.call(query);
} catch (err) {
  console.error(err.message);
}

cookies.forEach(cookie => {
  // ...
});
```

**Tealight** provides a familiar API to perform native queries, without the extra work.

```js
tealight(".cookie").forEach(cookie => {
  // ...
});
```

<br>

<br>

## Installation

### Browser

A simple and fast way to get started is to include this script on your page:

```html
<script src="https://unpkg.com/tealight"></script>
```

This will create the global variable `tealight`.

### Module

```bash
$ npm install tealight
```

#### CommonJS

```js
const tealight = require("tealight");
```

#### ES2015

```js
import tealight from "tealight";
```

<br>

<br>

## Usage

`tealight` accepts a single argument `target` and will **always return an array of 0 or more DOM nodes**.

For the examples below, we will query against this HTML fragment:

```html
<div id="jar">
	<div class="chocolate-chip cookie"></div>
	<div class="peanut-butter cookie"></div>
	<div class="short-bread cookie"></div>
</div>
```

<br>

### `tealight(target: string): Array<HTMLElement>`

`string` targets will be used as CSS selectors.

```js
tealight("#jar");
// => [ <div#jar> ]
```

```js
tealight(".cookie");
// => [ <div.chocolate-chip.cookie>, <div.peanut-butter.cookie>, <div.short-bread.cookie> ]
```

<br>

### `tealight(target: HTMLElement): Array<HTMLElement>`

`HTMLElement` targets will simply be wrapped in an `Array`

```js
const node = document.querySelector("#jar");

tealight(node);
// => [ <div#jar> ]
```

<br>

### `tealight(target: HTMLCollection) : Array<HTMLElement>`

`HTMLCollection` arguments will be converted to `Array`.

```js
const nodeList = document.querySelectorAll(".cookie");

tealight(nodeList);
// => [ <div.chocolate-chip.cookie>, <div.peanut-butter.cookie>, <div.short-bread.cookie> ]
```

<br>

### `tealight(target: Array<any>): Array<HTMLElement>`

`Array` targets will be filtered, leaving only `HTMLElement`

```js
let node = document.querySelector("#jar");
let array = [node, null, ".cookie"];

tealight(array);
// => [ <div#jar> ]
```

<br>

<br>

---

Copyright 2018 Fisssion LLC.
<br>
Open source under the [MIT License](https://github.com/jlmakes/tealight/blob/master/LICENSE).
