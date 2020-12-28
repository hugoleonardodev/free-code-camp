const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const regex = /[.!?]/g;
function rot13(str) {
  const matchEnd = str.match(regex);
  const sentence = str.replace(regex, '');
  const strToArr = sentence.split(' ');

  const arrStr = [];
  for (let index = 0; index < strToArr.length; index += 1) {
    const word = strToArr[index];
    const arr = word.split('');
    const strArr = [];
    arr.forEach(element => {
      const indexOfElement = alphabet.indexOf(element);
      if (indexOfElement < 13) {
        const position = 13 + indexOfElement;
        strArr.push(alphabet[position]);
      }
      const position = indexOfElement - 13;
      strArr.push(alphabet[position]);
    });
    arrStr.push(strArr);
  }
  const newStrArr = [];
  arrStr.forEach(e=> newStrArr.push(e.join('')));
  if (matchEnd === null) {
    return newStrArr.join(' ');
  }
  return newStrArr.join(' ') + matchEnd;
}

console.log(rot13("SERR PBQR PNZC"));

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

// console.log(rot13("SERR PBQR PNZC"));