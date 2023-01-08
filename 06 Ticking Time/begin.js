/*
  WRITE YOUR SOLUTION HERE
*/
// callback functions are functions that are passed to other functions as arguments
// they get called at a later point in time
function clock() {
  // select the Div
  let div = document.querySelector("#clock");
  setInterval(() => {
    div.textContent = new Date().toLocaleTimeString();
  }, 1000);
}

clock();
