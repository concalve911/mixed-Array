"use strict";
function averageOfNumbers(arr) {
  const numbers = arr.filter(function (element) {
    return typeof element === "number" && !isNaN(element);
  });
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);

  return sum / numbers.length;
}

const mixedArray = [1, "text", 3.5, null, 7, undefined, "another text", 4];
const result = averageOfNumbers(mixedArray);
console.log(result);
