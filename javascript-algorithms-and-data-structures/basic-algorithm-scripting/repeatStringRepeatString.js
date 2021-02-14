function repeatStringNumTimes(str, num) {
  if(num < 0) {
    return '';
  }
  let counter = 0;
  let newString = '';
  while(counter < num) {
    counter += 1;
    newString += str;
  }
  return newString;
}

repeatStringNumTimes("abc", 3);
