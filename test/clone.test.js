describe('Clone', () => {
    test('shallow clone', () => {
        var clone = require('..').clone;
        var objects = [{a: 1}, {b: 2}];
        var shallow = clone(objects);

        expect(shallow[0]).toBe(objects[0]);
    });

    test('deep clone', () => {
        var cloneDeep = require('..').cloneDeep;
        var objects = [{a: 1}, {b: 2}];
        var deep = cloneDeep(objects);

        expect(deep[0]).not.toBe(objects[0]);
    });

    test('deep clone with', () => {
        var cloneDeepWith = require('..').cloneDeepWith;
        var objects = [{a: 1}, {b: 2}];

        function customizer(value) {
            if (value === 1) {
                return 2;
            }
        }

        var deepWith = cloneDeepWith(objects, customizer);

        expect(deepWith[0].a).toBe(2);
    });
});
