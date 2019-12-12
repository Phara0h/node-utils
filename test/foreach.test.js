describe('forEach', () => {
    test('Array', () => {
        var forEach = require('..').forEach;
        var vals = 0;

        forEach([1, 2], function(value) {
            vals += value;
        });
        expect(vals).toEqual(3);
    });

    test('Object', () => {
        var forEach = require('..').forEach;
        var vals = '';

        forEach({a: 1, b: 2}, function(value, key) {
            vals  = vals + key + value;
        });
        expect(vals).toEqual('a1b2');
    });
});
