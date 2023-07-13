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
console.log(ok);
