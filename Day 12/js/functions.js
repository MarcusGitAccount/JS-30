
let pressedKeys = '';
let code        = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

window.addEventListener('keyup', (e) => {
  pressedKeys += e.key.toString();
  if (pressedKeys.includes(code)){
    console.log('unlocked code');
    pressedKeys = '';
  }
});