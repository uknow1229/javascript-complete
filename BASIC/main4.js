let ok = false;
let maybeOK = false;

if (ok) {
  // console.log('OK!');
} else if (maybeOK) {
  console.log('maybe OK...');
} else {
  console.log('NO!');
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
  console.log('OK!');
} else {
  console.log('NO!');
}

console.log(ok);
