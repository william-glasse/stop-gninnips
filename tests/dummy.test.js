const spinWords = require('../src/dummy');

describe('Spin Words', () => {
  test('should return an unchanged input if the length of the word is less than 5', () => {
    expect(spinWords('test')).toBe('test');
  });
  test('should return the input in reverse if the input string is of 5 or more characters', () => {
    expect(spinWords('another')).toBe('rehtona');
  });
  test('for multi word inputs, only words of length great than 5 are reversed', () => {
    expect(spinWords('test another')).toBe('test rehtona');
  });
});
