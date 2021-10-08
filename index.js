const generateSubWords = (word) => {
  const maxLength = word.length;
  const subWords = [];
  let decrementCounter = 0;

  for (let i = 1; i < maxLength; i++) {
    for (let j = 0; j < maxLength - decrementCounter; j++) {
      subWords.push(word.substr(j, i));
    }
    decrementCounter++;
  }
  const subWordsResult = [...new Set(subWords)];
  return {
    subWordsResult,
    length: subWordsResult.length,
  };
};

console.log(generateSubWords("dupsko"));
