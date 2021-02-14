function countOnline(usersObj) {
  // Only change code below this line
  // console.log(usersObj.Alan.online)
  let onLineCounter = 0;
  for(let user in usersObj) {
    // console.log(user.online);
    if(usersObj[user].online) {
      onLineCounter += 1;
    }
  }
  return onLineCounter;
  // Only change code above this line
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }));
console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }));
