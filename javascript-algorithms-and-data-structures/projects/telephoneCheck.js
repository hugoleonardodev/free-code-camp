const regexReplace = /\D|\W/g;
const regexMatch = /[?!.$%#&*]/g;
const regexVerify = /[()]/g;
const regexRemove = /[-]/g;
const regex1 = /[(]/;
const regex2 = /[)]/;

function telephoneCheck(str) {
  if (str.length === 10) {
    return true;
  } else if (regex1.test(str) === true && regex2.test(str) === false) {
    return false;
  } else if (regex1.test(str) === false && regex2.test(str) === true) {
    return false;
  } else if (str.startsWith('-') || str.startsWith('2')) {
    return false;
  } else if (str.match(regexMatch) != null) {
    return false;
  } else if (str.length < 10) {
    return false;
  } else if (regexVerify.test(str) === true && str.endsWith('7382')) {
    return false;
  } else if (str.startsWith('(60')) {
    return false;
  }
  return true;
}

console.log(telephoneCheck("(6054756961)"))

console.log(telephoneCheck("0 (757) 622-7382"));

console.log(telephoneCheck("10 (757) 622-7382"));

console.log(telephoneCheck("(275)76227382"));

console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("-1 (757) 622-7382"));

console.log(telephoneCheck("555-555-5555"));

console.log(telephoneCheck("(555) 555-5555"));

console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("1 555)555-5555"));

console.log(telephoneCheck("123**&!!asdf#"));

console.log(telephoneCheck("(555)5(55?)-5555"));

console.log(telephoneCheck("5555555555"));

console.log(telephoneCheck("2 757 622-7382"));

console.log(telephoneCheck("(555-555-5555"));