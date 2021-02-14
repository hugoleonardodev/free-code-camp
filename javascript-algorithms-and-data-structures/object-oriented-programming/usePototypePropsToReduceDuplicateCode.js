function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4; // all instances of Dog now will have numLegs = 4, but the object does not show

// Only change code above this line
let beagle = new Dog("Snoopy");

console.log(beagle);
console.log(beagle.numLegs);
