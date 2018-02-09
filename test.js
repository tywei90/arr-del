'use strict';

require('mocha');
var should = require('should');
var arrDel = require('./');

describe('errors', function() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('should throw an error when invalid type of array are passed', function() {
        (function() {
            arrDel({});
        }).should.throw('PARAM MUST BE ARRAY');
    });

    it('should throw an error when invalid type of indexArr are passed', function() {
        (function() {
            arrDel(arr, 2);
        }).should.throw('PARAM MUST BE ARRAY');
    });

    it('should throw an error when indexArr elements are not a number', function() {
        (function() {
            arrDel(arr, [2, 'string']);
        }).should.throw('PARAM MUST BE NUMBER ARRAY');
    });
});

describe('empty array', function() {
    it('should return an empty array when null or undefined is passed', function() {
        arrDel().should.eql([]);
        arrDel(undefined).should.eql([]);
        arrDel(null).should.eql([]);
    })
});

describe('original array', function() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('should return an original array when indexArr is null or undefined', function() {
        arrDel(arr).should.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        arrDel(arr, undefined).should.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        arrDel(arr, null).should.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
});

describe('basic delete', function() {
    it('should delete an array of normal indexArr', function() {
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var out = arrDel(arr, [1, 3, 4, 7]);
        out.should.eql([0, 2, 5, 6, 8, 9]);
    })
});

describe('advanced delete', function() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('should support minus index such as "-1" represent the last element', function() {
        arrDel(arr, [-1, -3]).should.eql([0, 1, 2, 3, 4, 5, 6, 8]);
    });

    it('should ignore indexArr[i], if Math.abs(indexArr[i]) > array.length', function() {
        arrDel(arr, [12, -30, 23]).should.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should deduplicated indexArr', function() {
        arrDel(arr, [0, 1, 1, 2, 9, -1]).should.eql([3, 4, 5, 6, 7, 8]);
    });

    it('should not change the value of original array', function() {
        arrDel(arr, [0, 1, 1, 2, 9, -1]);
        arr.should.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});






