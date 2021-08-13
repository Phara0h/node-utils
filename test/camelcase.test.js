
describe('CamelCase', () => {
    test('spaces (Foo Bar)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('Foo Bar')).toEqual('fooBar');
    });

    test('dashs (--FOO-BAR--)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('--FOO-BAR--')).toEqual('fooBar');
    });

    test('snek (foo_bar)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('foo_bar')).toEqual('fooBar');
    });

    test('snek and dash (foo_bar-Swag)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('foo_bar-Swag')).toEqual('fooBarSwag');
    });

    test('camel case (thisIsAlreadyCamelCase)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('thisIsAlreadyCamelCase')).toEqual('thisIsAlreadyCamelCase');
    });

    test('camel case 2 (thisAPIIsAlreadyCamelCase)', () => {
        var camelcase = require('..').camelCase;

        expect(camelcase('thisAPIIsAlreadyCamelCase')).toEqual('thisApiIsAlreadyCamelCase');
    });
});
