
var combination = {
  'mouse': false,
  '16': false
}

window.addEventListener('mousedown', (e) => {
  if (e.button === 0){
    combination.mouse = true;
    if (Object.keys(combination).every(key => combination[key] === true))
      console.log('it  worked');
  }
});

window.addEventListener('mouseup', (e) => {
  combination.mouse = false;
});

window.addEventListener('keydown',   (e) => {
  if (combination.hasOwnProperty(e.keyCode)){
    combination[e.keyCode] = true;
    if (Object.keys(combination).every(key => combination[key] === true))
      console.log('it worked');
  }
});

window.addEventListener('keyup',   (e) => {
  if (combination.hasOwnProperty(e.keyCode))
    combination[e.keyCode] = false;
});