
describe('KebabCase', () => {
    test('spaces (Foo Bar)', () => {
        var kebabcase = require('..').kebabCase;

        expect(kebabcase('Foo Bar')).toEqual('foo-bar');
    });

    test('underscores (__FOO_BAR__)', () => {
        var kebabcase = require('..').kebabCase;

        expect(kebabcase('__FOO_BAR__')).toEqual('foo-bar');
    });

    test('camel (fooBar)', () => {
        var kebabcase = require('..').kebabCase;

        expect(kebabcase('fooBar')).toEqual('foo-bar');
    });

    test('camel and underscore (fooBar_Swag)', () => {
        var kebabcase = require('..').kebabCase;

        expect(kebabcase('fooBar_Swag')).toEqual('foo-bar-swag');
    });
});
