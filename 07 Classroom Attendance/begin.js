/*
  WRITE YOUR SOLUTION HERE
*/
// destructuring: is an expression that allows us extract values from objects and arrays into variables
const classroom = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};
function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;
  let students;
  if (hasTeachingAssistant) [, , ...students] = classList;
  else [, ...students] = classList;

  return students;
}

console.log(getStudents(classroom));
