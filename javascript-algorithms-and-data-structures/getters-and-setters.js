class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor

//

// Only change code below this line
class Thermostat {
  constructor(F) {
    this.farenheitTemp = F;
  }
  // getter
  get temperature() {
    const toCelsius = ((5/9) * (this.farenheitTemp - 32))
    return toCelsius;
  }
  // setter
  set temperature(C) {
    this.farenheitTemp = (C * 9.0 / 5 + 3);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos); // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius