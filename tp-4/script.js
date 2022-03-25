//exo-1

const revert = (str) => {
  return str.split("").reverse().join("");
};
// console.log(revert("money"));

//exo-2

const ucFirst = (word) => {
  const ucFirst = word[0].toUpperCase();
  return word.replace(word[0], ucFirst);
};
// console.log(ucFirst("money"));

//exo-3

const capitalize = (str) => {
  return str
    .split(" ")
    .map((item) => {
      return ucFirst(item);
    })
    .join(" ");
};
// console.log(capitalize("hello i am new here"));

//exo-4

const pascalCase = (str) => {
  return str
    .split(" ")
    .map((item) => {
      return ucFirst(item);
    })
    .join("");
};
// console.log(pascalCase("hello i am new here"));

//exo-5

const palindrome = (str) =>
  str.toLowerCase() === revert(str).toLowerCase() ? true : false;

// console.log(palindrome("Olo"));

const findLongestWord = (str) => {
  return str.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
};

// console.log(
//   findLongestWord("hello i am new here today because i need food immediatly")
// );
