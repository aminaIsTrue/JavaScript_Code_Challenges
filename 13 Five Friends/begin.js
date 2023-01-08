/*
  WRITE YOUR SOLUTION HERE
*/
const div = document.querySelector("#timeline");
async function mySpace() {
  try {
    const top5friends = await (
      await fetch("https://randomuser.me/api/?results=5")
    ).json();
    top5friends.results.map((friend) => {
      const imgNode = document.createElement("img");
      imgNode.src = friend.picture.medium;
      div.appendChild(imgNode);
    });
  } catch (error) {
    console.log(error.message);
  }
}

mySpace();
