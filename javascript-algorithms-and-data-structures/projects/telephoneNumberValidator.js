const regex1 = /[ -]/g
const regex2 = /[()]/g

function telephoneCheck(str) {
  const n = str.replace(regex1,'');
  const v = n.match(regex2);
  const r = v.join('');
  if (n.length === 12 && r === '()') {
    return true;
  } else if (n.length === 13 && n.indexOf('1') === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(telephoneCheck('555-555-5555'));

console.log(telephoneCheck("(555)555-5555"));

console.log(telephoneCheck("(555) 555-5555"));

console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("1 555)555-5555"));