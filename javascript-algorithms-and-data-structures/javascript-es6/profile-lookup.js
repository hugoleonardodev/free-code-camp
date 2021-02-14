// Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


// function lookUpProfile(name, prop){
//   if (contacts.some(object => object.firstName === name) &&
//     contacts.some(object => object[prop])) {
//     const result = (contacts.find(object => object[prop]));
//     return result[prop];
//   } else if (!contacts.find(object => object.firstName === name)) {
//     return 'No such contact'
//   } else if (!contacts.find(object => object[prop])) {
//     return 'No such property'
//   }
// }

// console.log(lookUpProfile("Bob", "likes"));

// console.log(lookUpProfile("Akira", "likes"));

// console.log(lookUpProfile("Akira", "address"));

// console.log(lookUpProfile("Sherlock", "likes"));

// console.log(lookUpProfile("Kristian", "lastName"));

function lookUpProfile(name, prop) {
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));

console.log(lookUpProfile("Sherlock", "likes"));

console.log(lookUpProfile("Bob", "number"));

console.log(lookUpProfile("Akira", "address"));
