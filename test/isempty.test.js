describe('isEmpty', () => {
    test('Not Empty Object', () => {
        var isEmpty = require('..').isEmpty;
        var object = {a: [{b: {c: 3}}]};

        expect(isEmpty(object)).toBe(false);
    });

    test('Empty Object', () => {
        var isEmpty = require('..').isEmpty;
        var object = {};

        expect(isEmpty(object)).toBe(true);
    });

    test('Empty Array', () => {
        var isEmpty = require('..').isEmpty;
        var object = [];

        expect(isEmpty(object)).toBe(true);
    });

    test('Not Empty Array', () => {
        var isEmpty = require('..').isEmpty;
        var object = [3, 4, 5];

        expect(isEmpty(object)).toBe(false);
    });

    test('Null Object', () => {
        var isEmpty = require('..').isEmpty;
        var object = null;

        expect(isEmpty(object)).toBe(true);
    });

    test('Undefined Object', () => {
        var isEmpty = require('..').isEmpty;
        var object;

        expect(isEmpty(object)).toBe(true);
    });
});
