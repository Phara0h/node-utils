
describe('SnakeCase', () => {
    test('spaces (Foo Bar)', () => {
        var snakecase = require('..').snakeCase;

        expect(snakecase('Foo Bar')).toEqual('foo_bar');
    });

    test('dashs (--FOO-BAR--)', () => {
        var snakecase = require('..').snakeCase;

        expect(snakecase('--FOO-BAR--')).toEqual('foo_bar');
    });

    test('camel (fooBar)', () => {
        var snakecase = require('..').snakeCase;

        expect(snakecase('fooBar')).toEqual('foo_bar');
    });

    test('camel and dash (fooBar-Swag)', () => {
        var snakecase = require('..').snakeCase;

        expect(snakecase('fooBar-Swag')).toEqual('foo_bar_swag');
    });
});
