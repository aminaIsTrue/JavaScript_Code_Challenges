/*
  WRITE YOUR SOLUTION HERE
*/

function testPwd(pwd) {
  const password = pwd.trim();
  const oneLowerCaseLetter = /(?=.+[a-z])/;
  const oneUpperCaseLetter = /(?=.+[A-Z])/;
  const oneDigit = /(?=.+[0-9])/;
  const oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  const minimumEightCharacters = /(?=.{8,})/;

  const allowed =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);
  return allowed
    ? "Your password is valid"
    : "Your password is not valid, try again!";
}

console.log(testPwd("A6uzvll3"));
