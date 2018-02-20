# arr-del [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tywei90/arr-del/blob/master/LICENSE) [![NPM version](https://img.shields.io/npm/v/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![NPM monthly downloads](https://img.shields.io/npm/dm/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![NPM total downloads](https://img.shields.io/npm/dt/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![Windows Build Status](https://travis-ci.org/tywei90/arr-del.svg?branch=master)](https://travis-ci.org/tywei90/arr-del)

### [中文](./README.ch.md)

> Delete array elements in one time by array consists of their indexes.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save arr-del
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add arr-del
```

## Usage

Delete array elements by their indexes:

```js
var arrDel = require('arr-del');
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = arrDel(arr, [1, 3, 4, 7]);
console.log(out);
//=> [0, 2, 5, 6, 8, 9]
```


## Params

```js
arrDel(array, indexArr);
```

* `array`: **{Array}** The array to delete
* `indexArr`: **{Number Array}**: Array consists of indexes which you want to delete

## Note

* You can still use -1 represent the last element of Array, and so on.
* If `Math.abs(indexArr[i]) > array.length`, `indexArr[i]` will be ignore
* `indexArr` will be deduplicated
* You don't need to sort indexArr
* The method 'arrDel' would not change the value of original array. So if you want to change it, keep in mind to assign to it.

## Examples

```js
var arrDel = require('arr-del');
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = arrDel(arr, [1, 5, 3, -1, -2, 16, 20, -11, -23]);
console.log(out);
//=> [0, 2, 4, 6, 7]
console.log(arr);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## About

### Related projects

* [arr-sort](https://www.npmjs.com/package/arr-sort): Sort an object array by one or more properties even nested properties. Besides, you can determine the direction even supply a comparison function in each property sorting. | [homepage](https://github.com/tywei90/arr-sort "Sort an object array by one or more properties even nested properties. Besides, you can determine the direction even supply a comparison function in each property sorting.")

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**tywei90**

* [github/tywei90](https://github.com/tywei90)
* [blog/tywei90](https://www.wty90.com)

### License

Copyright © 2018, [tywei90](https://github.com/tywei90).
Released under the [MIT License](LICENSE).
