'use strict';

const utils = require('../..');

describe('cloneDeep', () => {
    describe('with a nested object with arrays', () => {
        const input = {
            a: {
                b: {
                    c: [
                        {
                            d: {
                                e: [
                                    1,
                                    2,
                                ],
                            },
                        },
                        3,
                        4,
                    ],
                },
            },
        };

        it('returns an object with the same properties', async () => {
            const output = utils.cloneDeep(input);

            expect(output).toEqual(input);
            expect(output).toEqual(input);
            expect(output.a).toEqual(input.a);
            expect(output.a.b).toEqual(input.a.b);
            expect(output.a.b.c).toEqual(input.a.b.c);
            expect(output.a.b.c[0].d).toEqual(input.a.b.c[0].d);
            expect(output.a.b.c[0].d.e).toEqual(input.a.b.c[0].d.e);
        });

        it('returns an object with not the exact same properties', async () => {
            const output = utils.cloneDeep(input);

            expect(output).not.toBe(input);
            expect(output.a).not.toBe(input.a);
            expect(output.a.b).not.toBe(input.a.b);
            expect(output.a.b.c).not.toBe(input.a.b.c);
            expect(output.a.b.c[0].d).not.toBe(input.a.b.c[0].d);
            expect(output.a.b.c[0].d.e).not.toBe(input.a.b.c[0].d.e);
        });
    });
});
