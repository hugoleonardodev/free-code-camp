function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

(() => console.log("A cozy nest is ready"))();
