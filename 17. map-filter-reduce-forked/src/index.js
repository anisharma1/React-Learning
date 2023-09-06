//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }
// const newNums = numbers.map(double);
// console.log(newNums);

// var newNumsArr2 = [];
// numbers.forEach(function (x) {
//   newNumsArr2.push(x * 2);
// });
// console.log(newNumsArr2);

//Filter - Create a new array by keeping the items that return true.
// const newNums3 = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNums3);

// var newNumsArr2 = [];
// numbers.forEach(function (x) {
//   if (x < 10) {
//     newNumsArr2.push(x * 2);
//   }
// });
// console.log(newNumsArr2);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = 0;
// numbers.forEach(function (currNum) {
//   newNumber += currNum;
// });
// console.log(newNumber);

// var newNumber2 = numbers.reduce(function (acc, currNum) {
//   return acc + currNum;
// });
// console.log("Using reduce: " + newNumber2);

//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// const n1 = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(n1);

// //FindIndex - find the index of the first item that matches.

// const i1 = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(i1);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (eEntry) {
  return eEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
