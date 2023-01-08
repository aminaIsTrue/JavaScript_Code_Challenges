/*
  WRITE YOUR SOLUTION HERE
*/
const username = Symbol("username");

const user = {
  [username]: "Amina Ouj",
  password: 1111,
  age: 36,
};
user.username = "normina";
console.log(user.username);
console.log(user);
