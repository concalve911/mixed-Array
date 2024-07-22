function averageOfNumbers(arr) {
  var numbers = arr.filter(function (element) {
    return typeof element === "number" && !isNaN(element);
  });
  if (numbers.length === 0) {
    return 0;
  }
  var sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);

  return sum / numbers.length;
}

var mixedArray = [1, "text", 3.5, null, 7, undefined, "another text", 4];
var result = averageOfNumbers(mixedArray);
console.log(result);
