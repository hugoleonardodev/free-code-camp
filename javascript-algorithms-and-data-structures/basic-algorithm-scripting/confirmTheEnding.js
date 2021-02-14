function confirmEnding(str, target) {
  // str.endsWith(target); not alowed
  console.log(str.substring(str.length - target.length).includes(target));
  return str.substring(str.length - target.length).includes(target);
}

console.log(confirmEnding("Bastian", "n"));
