const regexReplace = /\D|\W/g;
const regexMatch = /[?!.$%#&*]/g;
const regexVerify = /[()]/g;
const regexRemove = /[-]/g;

function telephoneCheck(str) {
  return str.length;
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

console.log(telephoneCheck("(555-555-5555"));