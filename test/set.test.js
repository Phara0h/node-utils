describe('Set', () => {
    test('Complete Object', () => {
        var set = require('..').set;
        var object = {a: [{b: {c: 3}}]};
        var newObject = set(object, ['a', '0', 'b', 'c'], 4);

        expect(newObject).toEqual({a: [{b: {c: 4}}]});
    });

    test('New Object', () => {
        var set = require('..').set;
        var object = {};
        var newObject = set(object, ['a', '0', 'b', 'c'], 4);

        expect(newObject).toEqual({a: [{b: {c: 4}}]});
    });

});
