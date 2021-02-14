function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
      product *= arr[i];
  }
  return product;
}

function multiplyRecursion(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiplyRecursion(arr, n - 1) * arr[n - 1];
  }
}

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
  // Only change code above this line
}

// console.log(multiply([1, 2, 3, 4, 5], 3))

// console.log(multiplyRecursion([1, 2, 3, 4, 5], 3));

// console.log(sum([1, 2, 3, 4, 5], 3));