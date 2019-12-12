describe('toPath', () => {
    test('Valid', () => {
        var toPath = require('..').toPath;

        expect(toPath('x.o[1].f.z[7].a[2].w.v.e')).toEqual(['x', 'o', '1', 'f', 'z', '7', 'a', '2', 'w', 'v', 'e']);
    });

});
