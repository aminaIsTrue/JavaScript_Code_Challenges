/*
  WRITE YOUR SOLUTION HERE
*/

function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}
const bgPink = changeColor("pink");
const bgGreen = changeColor("Green");
const bgBlue = changeColor("blue");

// select the clicked button
document.querySelector("#blue").addEventListener("click", bgBlue);
document.querySelector("#pink").addEventListener("click", bgPink);
document.querySelector("#green").addEventListener("click", bgGreen);
