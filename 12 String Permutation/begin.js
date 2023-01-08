/*
  WRITE YOUR SOLUTION HERE
*/

function numPermutations(string) {
  if (string.length === 0) return 1;
  return string.length * numPermutations(string.slice(1));
}
const num = numPermutations("scrable");
console.log(`The number of permutaions possible  of scrable  are ${num}`);
