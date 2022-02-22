const spinWords = require('../src/dummy');

describe('Spin Words', () => {
  test('should return an unchanged input if the length of the word is less than 5', () => {
    expect(spinWords('test')).toBe('test');
  });
});
