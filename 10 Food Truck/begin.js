/*
  WRITE YOUR SOLUTION HERE
*/

const menues = [["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]];
const ul = document.querySelector("#combined-menu");
function listItems(menues) {
  // 1-spread  the nested menues (level one nest)
  // const menueItems = [].concat(...menues);
  // flaten a deeply nested array
  const menueItemsR = menues.flat([1]);
  // 2-create a menu with non repeated items
  const menueItems = Array.from(new Set(menueItemsR));
  // 3-create <li> tags for each menu item & append it to the <ul>
  menueItems.forEach((item) => {
    const liNode = document.createElement("li");
    liNode.textContent = item;
    ul.appendChild(liNode);
  });
}
listItems(menues);
