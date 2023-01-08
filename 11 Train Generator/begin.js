/*
  WRITE YOUR SOLUTION HERE
*/
const button = document.querySelector("#next-stop");
function* getStops() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}
const gen = getStops();
button.addEventListener("click", () => {
  let stopp = gen.next();
  if (stopp.done) {
    console.log("We made it!");
    button.setAttribute("disabled", true);
  } else {
    console.log(`The next stop is ${stopp.value}`);
  }
});
