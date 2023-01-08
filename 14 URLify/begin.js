/*
  WRITE YOUR SOLUTION HERE
*/

function urlify(blogTitle) {
  // to lowercase
  // replace space with -
  // remove apostrophes & punctuation
  const punctuation = /['!,:;.?]/g;
  return blogTitle
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(punctuation, "");
}

console.log(urlify(" How, I? Got: In't;o? Programming!!! "));
