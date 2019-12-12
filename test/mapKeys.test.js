describe('MapKeys', () => {
    test('valid', () => {
        var mapKeys = require('..').mapKeys;
        var object = {a: 1, b: 2};

        expect(mapKeys(object, (value, key)=>{
            return key + value;
        })).toStrictEqual({a1: 1, b2: 2});
    });
});
