# arr-del [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tywei90/arr-del/blob/master/LICENSE) [![NPM version](https://img.shields.io/npm/v/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![NPM monthly downloads](https://img.shields.io/npm/dm/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![NPM total downloads](https://img.shields.io/npm/dt/arr-del.svg?style=flat)](https://www.npmjs.com/package/arr-del) [![Windows Build Status](https://travis-ci.org/tywei90/arr-del.svg?branch=master)](https://travis-ci.org/tywei90/arr-del)

> 一次性删除数组指定index的元素 

## 安装

采用 [npm](https://www.npmjs.com/) 安装:

```sh
$ npm install --save arr-del
```

采用 [yarn](https://yarnpkg.com) 安装:

```sh
$ yarn add arr-del
```

## 用法

根据数组index删除元素

```js
var arrDel = require('arr-del');
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = arrDel(arr, [1, 3, 4, 7]);
console.log(out);
//=> [0, 2, 5, 6, 8, 9]
```


## 参数

```js
arrDel(array, indexArr);
```

* `array`: **{ Array }** 待删除元素的数组
* `indexArr`: **{Number Array}**: 欲删除数组元素的index组成的数组

## 注意

* 你可以用`-1`表示最后一个数组元素
* 如果提供的index值满足： `Math.abs(indexArr[i]) > array.length`, `indexArr[i]` 将被忽略
* `indexArr` 会进行排重
* 没必要对`indexArr`数组进行排序，已兼容
* arrDel方法不会改变原来数组的值。如果你想改变它，可以直接将结果赋值。

## 例子

```js
var arrDel = require('arr-del');
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = arrDel(arr, [1, 5, 3, -1, -2, 16, 20, -11, -23]);
console.log(out);
//=> [0, 2, 4, 6, 7]
console.log(arr);
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 关于

### 相关项目

* [arr-sort](https://www.npmjs.com/package/arr-sort): 根据一个或者多个属性对数组进行排序，支持嵌套的属性。而且可以在每个条件中指定排序的方向，并支持传入比较函数。 | [homepage](https://github.com/tywei90/arr-sort "根据一个或者多个属性对数组进行排序，支持嵌套的属性。而且可以在每个条件中指定排序的方向，并支持传入比较函数。")

### Running tests

跑集成测试是一个非常好的熟悉一个项目及其API的方法。你可以通过以下命令安装依赖并跑测试：

```sh
$ npm install && npm test
```

### 作者

**tywei90**

* [github/tywei90](https://github.com/tywei90)
* [blog/tywei90](https://www.wty90.com)

### 许可证

Copyright © 2018, [tywei90](https://github.com/tywei90).
Released under the [MIT License](LICENSE).
