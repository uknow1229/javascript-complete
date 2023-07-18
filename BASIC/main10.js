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

fruits = ['apple', , 'banana', , , 'grape'];
for (const fruit of fruits) {
  // console.log(fruit);
}
fruits = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
fruits = new Array('apple', 'banana', 'grape');
fruits = new Array(1, 2, 3);
fruits = new Array(1);
fruits = new Array('hello');
fruits = Array('apple', 'banana', 'grape');
fruits = Array(1, 2, 3);
fruits = Array(1);
fruits = Array('hello');
fruits = Array.of('apple', 'banana', 'grape');
fruits = Array.of(1, 2, 3);
fruits = Array.of(1);
fruits = Array.of('hello');
console.log(fruits[1], [1]);
