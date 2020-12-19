const sum = (...x) => {
  const args = [...x];
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4));

console.log(sum());

console.log(sum(5));

console.log(sum(0,1,2));

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4));

console.log(sum());

console.log(sum(5));

console.log(sum(0,1,2));