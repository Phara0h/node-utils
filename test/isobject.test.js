describe('isObject', () => {
    test('object', () => {
        var isObject = require('..').isObject;

        expect(isObject({a: 1})).toBe(true);
    });

    test('array', () => {
        var isObject = require('..').isObject;

        expect(isObject([1])).toBe(true);
    });

    test('function', () => {
        var isObject = require('..').isObject;

        expect(isObject(function() { return 1})).toBe(true);
    });

    test('string', () => {
        var isObject = require('..').isObject;

        expect(isObject('test')).toBe(false);
    });

    test('number', () => {
        var isObject = require('..').isObject;

        expect(isObject(1)).toBe(false);
    });

    test('undefined', () => {
        var isObject = require('..').isObject;

        expect(isObject(undefined)).toBe(false);
    });

    test('null', () => {
        var isObject = require('..').isObject;

        expect(isObject(null)).toBe(false);
    });
});
