function primera() {
  console.log("primera");
  setTimeout(() => {}, 10000);
}
function segunda() {
  console.log("segunda");
  setTimeout(() => {}, 5000);
}
function tercera() {
  console.log("tercera");
  setTimeout(() => {}, 2000);
}

primera();
segunda();
tercera();
