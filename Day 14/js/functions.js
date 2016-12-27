
let age  = 100;
let age2 = age;

console.log(age, age2);
age = 200;
console.log(age, age2);

/* ---- */

let str  = 'ABC';
let str2 = str;

console.log(str, str2);
str = '123';
console.log(str, str2);

/* ---- */

let array1 = ['AA', 'SS', 'DD', 'FF', 'GG'];
let array2 = array1;

// array2 is a reference to array1

console.log(array1, array2);
array1[1] = 'Changed(1)';
console.log(array1, array2);
array2[2] = 'Changed(2)';
console.log(array1, array2);

// let array3 = array1.slice();
// let array3 = Array.from(array1);
// let array3 = [].concat(array1);

let array3 = [...array1];

console.log(array1, array2, array3);
array2[3] = 'Changed(3)';
console.log(array1, array2, array3);

// Same stuff with objects

let person1 = {
  'name': 'Vasile',
  'age': 24
};

let person2 = person1;

console.log(JSON.stringify(person1), JSON.stringify(person2));
person1.age = 45;
console.log(JSON.stringify(person1), JSON.stringify(person2));

let person3 = Object.assign({}, person2, {'age': 31});

console.log(JSON.stringify(person1), JSON.stringify(person2), JSON.stringify(person3));

// clone deep functions

let person4 = JSON.parse(JSON.stringify(person3));

// does not work with object methods