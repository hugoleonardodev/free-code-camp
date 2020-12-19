// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  const array = Object.keys(object[id]);
  if (prop !== 'tracks' && value !== '') {
    if (array.includes(prop)) {
      object[id][prop] = value;
    } else {
      const obj = {}
      obj[prop] = value;
      Object.assign(object[id], obj);
    }
  } else if (prop === 'tracks' && !array.includes('tracks')) {
    const arr = [];
    arr.push(value);
    const obj = {};
    obj[prop] = arr;
    Object.assign(object[id], obj);
  }
  return object;
}

console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));

console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
