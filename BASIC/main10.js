let arrayLikeObject = {
  0: 'apple',
  1: 'banana',
  length: 2,
};
arrayLikeObject.__proto__ = Array.prototype;

let fruits = ['apple', 'banana'];
fruits[2] = 'grape';
fruits[10] = 'orange';
delete fruits[10];
fruits[hello] = 'hello';
fruits.length = 100;
fruits.length = 2;
console.log(fruits);
