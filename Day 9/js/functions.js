
console.time('Starting timing');

let size = 16;

function input(e){
  this.style.fontSize = (size++) % 72 + 'px';
}

document.querySelector('p').addEventListener('input', input);

console.log('Hello');

console.clear();

console.log('1 + 1 = %s', 1 + 1);

console.log(`1 + 1 = ${1 + 1}`);

console.log('%c Some styled text in console', 'color: red; font-size: 50px; background: black; text-shadow: 2px 2px 0 blue');

console.warn('Warning');

console.error('Error');

console.info('Info fact');

console.assert(true === false, 'This is wrong');

console.dir(document.querySelector('p'));

console.log(document.querySelector('p'));

console.clear();

for (let index = 0; index < 5; index++){
  console.group(index);
  //console.groupCollapsed(index);
  console.log('First string');
  console.log('Second string');
  console.log('Third string');
  console.groupEnd(index);
}

console.count(23);
console.count(23);
console.count(33);
console.count(33);
console.count(33);
console.count(23);
console.count(23);
console.count(23);

console.timeEnd('Starting timing');