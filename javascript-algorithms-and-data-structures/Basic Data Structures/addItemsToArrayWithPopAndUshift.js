function mixedNumbers(arr) {
  // Only change code below this line
  const a = ['I', 2, 'three'].reverse();
  const b = [7, 'VIII', 9];
  let counter = 0;
  while(counter < 3) {
    arr.push(b[counter]);
    arr.unshift(a[counter]);
    counter += 1;
  }
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
