/*
 * arr-del <https://github.com/tywei90/arr-del>
 *
 * Copyright (c) 2018-2020, tywei90.
 * Released under the MIT License.
 */

'use strict';



/**
 * Delete array elements in one time by array consists of their indexes
 *
 * @param  {Array} `arr` The Array to sort.
 * @param  {Number Array} `indexArr` Array consists of indexes which you want to delete.
 * @return {Array} Returns a new deleted array.
 * @api public
 */

function arrDel(arr, indexArr) {
	// check params
	if(indexArr === undefined){
		return arr
	}
	if(Object.prototype.toString.call(indexArr) !== "[object Array]"){
		throw new TypeError('PARAM MUST BE ARRAY');
	}
	var arrLen = arr.length;
	for(var i=0, len=indexArr.length; i < len; i++){
		if(typeof indexArr[i] !== "number"){
			throw new TypeError('PARAM MUST BE NUMBER ARRAY');
		}
		if(Math.abs(indexArr[i]) > arrLen){
			indexArr[i] = arrLen + 1;
		}
		if(indexArr[i] >= -arrLen && indexArr[i] < 0){
			indexArr[i] = indexArr[i] + arrLen;
		}
	}
	// first sort indexArr, then remove redupliction
	indexArr.sort(function(a, b){
		return a - b
	})
	var tmpArr = [];
	for(var i=0, len=indexArr.length; i < len; i++){
		if(tmpArr.indexOf(indexArr[i]) == -1){
			tmpArr.push(indexArr[i])
		}
	}
	// should not change the value of input arr
	var outArr = JSON.parse(JSON.stringify(arr));
	if (arr.length === 0) {
		return [];
	}
	for (var i = 0, len = tmpArr.length; i < len; i++) {
		outArr.splice(tmpArr[i] - i, 1);
	}
	return outArr
}

module.exports = arrDel;