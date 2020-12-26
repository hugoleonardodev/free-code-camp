function palindromeChecker(sentence) {
  const joinedSentence = sentence.replace(/[ ,._-]/g, "");
  const toLowerCase = joinedSentence.toLowerCase();
  const sentenceArray = toLowerCase.split('');
  if (sentenceArray.includes('/')) {
    const joinSentence = sentenceArray.join('');
    const removeSpecialChar = joinSentence.replace(/[()\\\/]/g, '');
    const toArray = removeSpecialChar.split('');
    const reverse = toArray.reverse();
    const reverseSentece = reverse.join('');
    if (reverseSentece === removeSpecialChar) {
      return true;
    }
    return false;
  }
  const reverse = sentenceArray.reverse();
  const reverseSentece = reverse.join('');
  if (reverseSentece === toLowerCase) {
    return true;
  }
  return false;
}

console.log(palindromeChecker('_eye'));

console.log(palindromeChecker('race car'));

console.log(palindromeChecker('My age is 0, 0 si ega ym.'));

console.log(palindromeChecker('A man, a plan, a canal. Panama'));

