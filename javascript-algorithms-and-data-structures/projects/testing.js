const regexReplace = /\D|\W/g;
const regexMatch = /[?!.$%#&*]/g;
const regexVerify = /[()]/g;
const regexRemove = /[-]/g;

function telephoneCheck(str) {
  const stringNumber = str;
  const verifyParenthesis = stringNumber.match(regexVerify);
  const verifyChars = stringNumber.match(regexMatch);
  const onlyNumber = stringNumber.replace(regexReplace,'');
  const indexOfOne = onlyNumber.indexOf('1');
  if (stringNumber.match(regexMatch) !== null) {
    return false;
  } else if (stringNumber.length === 10 && verifyChars === null) {
    return true;
  } else if (onlyNumber.length === 10 && verifyParenthesis.join('') === '()') {
    return true;
  } else if (onlyNumber.length === 11 && indexOfOne === 0) {
    return true;
  }
  return onlyNumber.length;
}


console.log(telephoneCheck("-1 (757) 622-7382"));

console.log(("-1 (757) 622-7382").match(regexMatch));

console.log(telephoneCheck("(555) 555-5555"));

console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("1 555)555-5555"));

console.log(telephoneCheck("123**&!!asdf#"));

console.log(telephoneCheck("(555)5(55?)-5555"))

console.log(telephoneCheck("5555555555"));

console.log(telephoneCheck("2 757 622-7382"));