const regexReplace = /\D|\W/g;
const regexMatch = /[?!.$%#&*]/g;
const regexVerify = /[()]/g;
const regexRemove = /[-]/g;

function checkStr(str) {
  if (!parseInt(str[0]) || str.match(regexMatch) !== null) {
    // console.log(parseInt(str[0]));
    return false;
  }
  return true;
}

function checkLength(str) {
  const matchParenthesis = str.match(regexVerify);
  const verifyParenthesis = matchParenthesis.join('');
  const onlyNumbers = str.replace(regexReplace,'');
  if (checkStr(str) === true && onlyNumbers.length === 10) {
    return true;
  } else if (checkStr(str) === true && verifyParenthesis === null) {
    return true;
  }
  return false;
}

function telephoneCheck(str) {
  if (checkStr(str) && checkLength(str)) {
    return true;
  }
  return false;
}

console.log(telephoneCheck("-1 (757) 622-7382"));

console.log(telephoneCheck("555-555-5555"));

console.log(telephoneCheck("(555) 555-5555"));

console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("1 555)555-5555"));

console.log(telephoneCheck("123**&!!asdf#"));

console.log(telephoneCheck("(555)5(55?)-5555"));

console.log(telephoneCheck("5555555555"));

console.log(telephoneCheck("2 757 622-7382"));

console.log(checkLength("5555555555"));
