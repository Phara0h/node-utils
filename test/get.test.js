describe('Get', () => {
    test('get', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    test('fail default return', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get(object, ['a', '0', 'b', 'd'])).toBe(null);
    });

    test('fail return default object', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get(object, ['a', '0', 'b', 'd'], {swag: 420})).toEqual(expect.objectContaining({
            swag: 420
        }));
    });

    test('undefined default return', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get(object, ['a', '0', 'b', 'd'])).toBe(null);
    });

    test('undefined return default object', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get(object, ['a', '0', 'b', 'd'], {swag: 420})).toEqual(expect.objectContaining({
            swag: 420
        }));
    });
});
