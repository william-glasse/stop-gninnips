const spinWords = (words) => {
  const splitWords = words.split(' ');
  const mappedWords = splitWords.map((word) =>
    word.length >= 5 ? [...word].reverse().join('') : word,
  );
  return mappedWords.join(' ');
};

module.exports = spinWords;
