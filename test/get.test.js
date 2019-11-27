describe('Get', () => {
    test('get', () => {
        var get = require('..').get;
        var object = {a: [{b: {c: 3}}]};

        expect(get({x: {o: [0, {f: {z: [0, 1, 2, 3, 4, 5, 6, {a: [0, 1, {w: {v: {e: 45}}}]}]}}]}}, ['x', 'o', 1, 'f', 'z', 7, 'a', 2, 'w', 'v', 'e'])).toBe(45);
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
