test('camelCase snakecase (_)', () => {
  var keysToCamel = require('..').keysToCamel;
  var testObj = {
    test_memes: {
      foo_bar: 69
    }
  }
  
  expect(keysToCamel(testObj).testMemes.fooBar).toBe(69);
});

test('camelCase dashcase (-)', () => {
  var keysToCamel = require('..').keysToCamel;
  var testObj = {
    "test-memes": {
      "foo-bar": 69
    }
  }

  expect(keysToCamel(testObj).testMemes.fooBar).toBe(69);
});
