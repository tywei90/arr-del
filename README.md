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


## License

Copyright © 2018, [tywei90](https://github.com/tywei90).
Released under the [MIT License](LICENSE).
