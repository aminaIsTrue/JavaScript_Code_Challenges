/*
  WRITE YOUR SOLUTION HERE
*/
function PayBill(numCoffes) {
  const bill = numCoffes.reduce((acc, curr) => acc + curr);

  return `The total bill is ${bill * 1.25}`;
}

console.log(PayBill([2, 3, 1, 5]));
console.log(PayBill([2, 5, 7, 1, 4]));
