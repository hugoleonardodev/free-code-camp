function findLongestWordLength(str) {
  const strArr = str.split(' ').map(word => word.length);
  return strArr.reduce((acc, cur) => {return acc < cur ? acc = cur : acc}, 0);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
