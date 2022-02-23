console.log("sajim-5");
function lodeData5_1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => userData(data));
}
