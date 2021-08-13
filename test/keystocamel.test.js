
describe('keysToCamel', () => {
    test('snakecase (_) non-recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            test_memes: {
                foo_bar: 69
            },
            a_list: [
              1,
              'foo_bar',
                {
                  foo_bar: 69
                }
            ]
        };

        expect(keysToCamel(testObj)).toEqual({testMemes: {foo_bar: 69}, aList: [1, 'foo_bar', {foo_bar: 69}]});
    });

    test('snakecase (_) recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            test_memes: {
                foo_bar: 69
            },
            a_list: [
                1,
                'foo_bar',
                {
                    foo_bar: 69
                }
            ]
        };

        expect(keysToCamel(testObj, true)).toEqual({testMemes: {fooBar: 69}, aList: [1, 'foo_bar', {fooBar: 69}]});
    });

    test('dashcase (-) non-recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            'test-memes': {
                'foo-bar': 69
            },
            'a-list': [
                1,
                'foo-bar',
                {
                    'foo-bar': 69
                }
            ]
        };

        expect(keysToCamel(testObj)).toEqual({testMemes: {'foo-bar': 69}, aList: [1, 'foo-bar', {'foo-bar': 69}]});
    });

    test('dashcase (-) recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            'test-memes': {
                'foo-bar': 69
            },
            'a-list': [
                1,
                'foo-bar',
                {
                    'foo-bar': 69
                }
            ]
        };

        expect(keysToCamel(testObj, true)).toEqual({testMemes: {fooBar: 69}, aList: [1, 'foo-bar', {fooBar: 69}]});
    });

    test('already camelCase non-recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            testMemes: {
                foo_bar: 69
            },
            aList: [
                1,
                'foo_bar',
                {
                    foo_bar: 69
                }
            ]
        };

        expect(keysToCamel(testObj)).toEqual({testMemes: {foo_bar: 69}, aList: [1, 'foo_bar', {foo_bar: 69}]});
    });

    test('already camelCase recursive', () => {
        var keysToCamel = require('..').keysToCamel;
        var testObj = {
            testMemes: {
                fooBar: 69
            },
            aList: [
                1,
                'fooBar',
                {
                    fooBar: 69
                }
            ]
        };

        expect(keysToCamel(testObj, true)).toEqual({testMemes: {fooBar: 69}, aList: [1, 'fooBar', {fooBar: 69}]});
    });
});
