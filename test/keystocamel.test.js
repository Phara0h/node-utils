
describe('keysToCamel', () => {
    test('snakecase (_)', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            test_memes: {
                foo_bar: 69
            }
        };

        expect(keysToCamel(testObj)).toEqual({testMemes: {fooBar: 69}});
    });

    test('dashcase (-)', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            'test-memes': {
                'foo-bar': 69
            }
        };

        expect(keysToCamel(testObj)).toEqual({testMemes: {fooBar: 69}});
    });
});
