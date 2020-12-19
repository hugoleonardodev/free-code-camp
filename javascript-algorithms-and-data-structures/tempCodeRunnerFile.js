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
    obj[prop] = value;
    Object.assign(object[id], obj);
  }
  return object;