function countWords(words) {
  return words.reduce((countMap, word) => {
    countMap[word] = ++countMap[word] || 1;

    return countMap;
  }, {});
}

module.exports = countWords;