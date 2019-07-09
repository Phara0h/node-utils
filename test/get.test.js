
test('get', () => {
  var get = require('..').get;
  var object = { 'a': [{ 'b': { 'c': 3 } }] };

  expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
});
