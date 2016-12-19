
var previousIndex = -1;
let checkBoxes    = document.querySelectorAll('input[type=checkbox]');
let combination   = {
  'mouse': false,
  '16': false
}

function checkBetweenIndexes(prev, current){
  let low = prev, high = current;

  if (low > high){
    let temp  = low;
    low = high;
    high = temp;
  }
  console.log([low, high]);

  while (low <= high)
    checkBoxes[low++].checked = true;
  
}

function getCurrentIndex(checkbox){
  return Array.from(checkBoxes).indexOf(checkbox);
}

function checkboxMouseDown(e){
  let currentIndex = getCurrentIndex(this);

  console.log(e);
  console.log(currentIndex, previousIndex, e.button);
  if (e.button === 0){
    combination.mouse = true;
    if (previousIndex != -1){
      console.log(combination);
      if (Object.keys(combination).every(key => combination[key] === true)){
        checkBetweenIndexes(previousIndex, currentIndex);
        checkBoxes[currentIndex].checked = true;
      }
    }
  }
  previousIndex = currentIndex;
}

function checkboxMouseUp(e){
  combination.mouse = false;
}

function checkBoxKeyDown(e){
  let checkbox = this;
  let currentIndex = getCurrentIndex(checkbox);
  if (combination.hasOwnProperty(e.keyCode)){

    combination[e.keyCode] = true;
    if (Object.keys(combination).every(key => combination[key] === true)){

      if (previousIndex != -1){
        checkBetweenIndexes(previousIndex, currentIndex);
        checkBoxes[currentIndex].checked = true;
      }
    }
  }
  previousIndex = currentIndex;
}

function checkboxKeyUp(e){
  if (combination.hasOwnProperty(e.keyCode))
    combination[e.keyCode] = false;
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('mousedown', checkboxMouseDown));
checkBoxes.forEach(checkbox => checkbox.addEventListener('mouseup', checkboxMouseUp));
checkBoxes.forEach(checkbox => checkbox.addEventListener('keydown', checkBoxKeyDown));
checkBoxes.forEach(checkbox => checkbox.addEventListener('keyup', checkboxKeyUp));
document.querySelector('form').addEventListener('submit', () => previousIndex = -1);