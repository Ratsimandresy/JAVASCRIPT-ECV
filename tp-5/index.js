const getHashTags = (str) =>
  str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .splice(0, 3)
    .map((word) => `#${word}`);

// console.log(
//   getHashTags(
//     "my life is chill nowadays because i have nothing to do and i am actually waiting"
//   )
// );
const removeDuplicate = (arr) => [...new Set([...arr])];

// console.log(removeDuplicate([0, 3, 3, 5, 1, 9, 0, 9, 5, 34, 54, 67, 67]));

const intersection = (first, second) =>
  first.filter((el1) => el1 === second.find((el2) => el1 === el2));

// console.log(intersection([1, 2, 3, 4], [0, 5, 2, 9, 1]));

const arrayDiff = (first, second) =>
  first
    .filter((el1) => el1 !== second.find((el2) => el1 === el2))
    .concat(second.filter((el2) => !first.includes(el2)));

// console.log(arrayDiff([1, 6, 3, 4, 5], [0, 5, 2, 9, 1]));

const combination = (...rest) => rest.reduce((a, b) => a * b);

// console.log(combination(2, 3, 4));
