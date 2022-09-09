/*
  BT: Viết 3 methods myMap, myFilter, myReduce của Array 
  sao cho giống với map, filter, reduce (sử dụng prototype của Array, this trong JS)
*/

Array.prototype.myMap = function (callbackFunction) {
  const newArray = [];

  for (let index = 0; index < this.length; index++) {
    if (this[index] === undefined || this[index] === null) {
      continue;
    }

    newArray.push(callbackFunction(this[index], index, this));
  }

  return newArray;
};

Array.prototype.myFilter = function (callbackFunction) {
  const newArray = [];

  for (let index = 0; index < this.length; index++) {
    if (this[index] === undefined || this[index] === null) {
      continue;
    }

    if (callbackFunction(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }

  return newArray;
};

Array.prototype.myReduce = function (callbackFunction, resultValue = 0) {
  for (let index = 0; index < this.length; index++) {
    if (this[index] === undefined || this[index] === null) {
      continue;
    }

    resultValue = callbackFunction(resultValue, this[index], index, this);
  }

  return resultValue;
};

const numbers = [65, 44, 12, 4, 60, 1];

delete numbers[1];

console.log(numbers);
console.log(numbers.myMap((num) => num * 10));
console.log(numbers.myFilter((num) => num > 10));
console.log(numbers.myReduce((sum, num) => sum + num, 0));