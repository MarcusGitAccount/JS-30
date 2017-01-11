
function deconstructingAssigment([a, b]){
  console.log(a, b);
}

function sumTwoNumbers(a = 0, b = 0){
  return a + b;
}

function sum(...numbers){
  return numbers.reduce((a, b) => a + b, 0);
}

console.group('function sum');
console.log(sum(1, 2, 3));
console.log(sum());
console.log(sum(1, 2));
console.groupEnd('function sum');

console.group('function sumTwoNumbers');
console.log(sumTwoNumbers());
console.log(sumTwoNumbers(1));
console.log(sumTwoNumbers(1, 2));
console.groupEnd('function sumTwoNumbers');

/* Array copy methods */

let array1 = ['A', 'B', 'C'];

let array2 = array1.slice(),
    array3 = Array.from(array1), 
    array4 = [].concat(array1),
    array5 = [...array1];

let foo = 10;

console.group('String interpolation');
console.log(foo + ' apples');
console.log('%s apples', foo);
console.log(`${foo} appleds`);
console.log(String.raw`Hello world${2 + 3}!`);
console.groupEnd('String interpolation');

console.group('Binary & Octal Literal + unicode');
console.log(0b10000 === 16);
console.log(0xFF === 255);
console.log(0o767 === 503);
console.log("𠮷".codePointAt(0) === 0x20BB7)
for (let charcode of "𠮷")
  console.log(charcode);
console.groupEnd('Binary & Octal Literal');

let x, y, z;
[x, y, z] = [1, 2, 3];
[x, z] = [z, x];

let object = {x, y, z};
let bar = {
  'id': 1,
  [['A', 'B', 'C', 'D', 'E'].filter(letter => letter.charCodeAt(0) > 68)[0]] : 'letter',
  getId() {
    return this.id;
  },
  'object': object
};
const {'id': objectId, 'getId': objectMethod, 'object' : { 'x': objectX} } = bar;
const list = [45, 67, 102];
let   [q = 43, w = 90, e, r] = list;

console.group('Objects');
console.log(object);
console.log(bar);
console.log(bar.getId());
console.log(objectId, objectX);
deconstructingAssigment([10, 100]);
console.log(q, w, e, r);
console.groupEnd('Objects');
/*
import { helloFromTheOtherFile } from 'oop';

console.group('Import-exports');
console.groupEnd('Import-exports');
*/
