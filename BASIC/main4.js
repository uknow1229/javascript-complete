let ok = false;
let maybeOK = false;

if (ok) {
  // console.log('OK!');
} else if (maybeOK) {
  console.log('maybe OK...');
} else {
  // console.log('NO!');
}

ok = 1 === 1;
ok = 'hello' === 'hello';
ok = 1 !== 2;
ok = 1 == '1';
ok = 1 === '1';
ok = 1 != '2';

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee3;
ok = coffee1.name === coffee2.name;

const fruits1 = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2;

ok = 1 > 0;
ok = 1 < 0;
ok = 1 >= 1;
ok = 1 <= 1;
ok = 'a' < 'b';
ok = 'A' <= 'a';
ok = 100;
ok = 'false';

if (ok) {
  // console.log('OK!');
} else {
  // console.log('NO!');
}

ok = true && false;
ok = true || true;
ok = 'hello' && 'hi';
ok = '' || 'hi';
const userInput = '';
const userName = userInput || 'User';
// console.log(userName);

const x = 15;
ok = x > 10 && x < 20;
ok = x === 10 || (x > 12 && userName);
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}

ok = !true;
ok = !'hello';
ok = !x;
ok = !!x;

const hello = 'hello2';
{
  const hello = 'hello1';
}

ok = 'false';
ok = ok ? 'OK' : 'NO';

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato': {
      const message = 'tomato is red!';
      console.log(message);
      break;
    }
    case 'pumpkin':
    case 'carrot': {
      const message = `${vegetable} is orange!`;
      console.log(message);
      break;
    }
    case 'onion': {
      const message = 'onion is white!';
      console.log(message);
      break;
    }
    default: {
      const message = 'not found';
      console.log(message);
    }
  }
}
//   if (vegetable === 'tomato') {
//     console.log('tomato is red!');
//   } else if (vegetable === 'pumpkin') {
//     console.log('pumpkin is orange!');
//   } else if (vegetable === 'onion') {
//     console.log('onion is white!');
//   }
// }

// vegetableColor('carrot');

let count = 100;
while (count < 10) {
  // console.log('while: ', count);
  count += 1;
}

let tomatoCount = 100;
do {
  // console.log('do-while: ', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

let a = 'a',
  b = 'b',
  c;
console.log(a, b, c);
for (
  let pumpkinCount = 0, i = 0;
  pumpkinCount < 10;
  pumpkinCount += 1, i += 1
) {
  console.log(pumpkinCount, i);
}

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (let i = 0; i < 5; i += 1) {
  console.log(fruits[i]);
}

const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};

for (const fruit of fruits) {
  console.log(fruits);
}
