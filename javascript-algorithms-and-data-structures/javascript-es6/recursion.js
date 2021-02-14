function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}

console.log(countup(5));

function countdown(n){
  if (n < 1) {
  return [];
  } else {
  const countArray = countdown(n - 1);
  countArray.unshift(n);;
  return countArray;
  }
}

console.log(countdown(10));

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 5));