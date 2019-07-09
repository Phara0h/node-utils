test('merge', () => {
    var merge = require('..').merge;
    var object = {
        a: [{b: 2}, {d: 4}]
    };

    var other = {
        a: [{c: 3}, {e: 5}]
    };
    var merged = {
        a: [{b: 2, c: 3}, {d: 4, e: 5}]
    };

    expect(merge(object, other)).toStrictEqual(merged);
});
