const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
function convertToRoman(num) {
  if (num <= 0 || num >= 4000) return num;
    let romanNumeral = "";
    for (let index=0; index < roman.length; index += 1) {
      while (num >= decimal[index]) { 
        num -= decimal[index];
        romanNumeral += roman[index];
      }
    }
  return romanNumeral;
}

console.log(convertToRoman(3999));

// console.log(convertToRoman(36));

// console.log(convertToRoman(1023));

// console.log(convertToRoman(3999));