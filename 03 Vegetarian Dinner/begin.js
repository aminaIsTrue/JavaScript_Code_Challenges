/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

function vegetarianMenu(Menu) {
  // 1-select DOM element to render menu
  const ul = document.getElementById("menu");
  // filter only vegetarians & append result to UL DOM
  menu
    .filter((dish) => dish.isVegetarian === true)
    .map((vDish) => {
      let node = document.createElement("li");
      node.textContent = vDish.name;
      ul.appendChild(node);
    });
}
vegetarianMenu(menu);
