function largestOfFour(arr) {
  // console.log(arr.reduce((acc, cur) => {
  //   cur.reduce((acc, cur) => {return acc < cur ? acc = cur : acc}, 0) > acc ? acc = cur.reduce((acc, cur) => {return acc < cur ? acc = cur : acc}, 0) : acc = acc;
  // return acc;
  // }, 0))
  const highest = arr.reduce((acc, cur) => {
    cur.reduce((acc, cur) => {
      return acc < cur ? acc = cur : acc}, 0) > acc 
        ? acc = cur.reduce((acc, cur) => {return acc < cur ? acc = cur : acc}, 0)
        : acc = acc;
    return acc;
  }, 0);
  // console.log(arr.find(array => array.includes(highest)));
  console.log(highest);
  return arr.find(array => array.includes(highest));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
