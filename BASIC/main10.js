let fruits = ['apple', 'banana'];
let arrayLikeObject = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
arrayLikeObject.__proto__ = Array.prototype;
console.log(fruits);
